const axios = require("axios");
const inquirer = require("inquirer");
const genHtml = require("./generateHTML")
const gen = genHtml.generateHTML;
const color = genHtml.colors;
const ghProfile = {}
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



async function getData(x){
  try{
  axios
  .get(githubQuery(x.username))
  .then((res) => {
   const data = res.data
  
    assignEasyProperties(data)
    return axios.all([
        axios.get(data.repos_url),
        axios.get(data.starred_url.slice(0,-15))
      ]).catch(err => {
        console.log("Sad")
      })
})
   .then((responseArr) => {
    ghProfile.pubRepos = (responseArr[0].data.length);
    ghProfile.starredRepos= (responseArr[1].data.length);
    const html = gen(x.color, ghProfile);
    return writeFileAsync("index.html", html);
      })
    }
   catch(err) {
     console.log("sad")
    console.error(err)
  }
}
   

function assignEasyProperties(data){
    ghProfile.avatar = data.avatar_url;
    ghProfile.username = data.login;
    ghProfile.location = data.location;
    ghProfile.url = data.url;
    ghProfile.blog = data.blog;
    ghProfile.bio = data.bio;
    ghProfile.followers = data.followers;
    ghProfile.following = data.following;
}

function githubQuery(userName) {
const queryUrl = `https://api.github.com/users/${userName}?per_page=100`;

return queryUrl 
}

function runInquier(){
inquirer
  .prompt([
    /* Pass your questions in here */
    {
      type: 'list',
    name: 'color',
    message: 'What is your favorite color?',
    choices: ['green', 'blue','pink', 'red']
    },
    {
    name: "username",
    message: 'what is your github username?'
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    getData(answers)
    
  });
}


runInquier();

const axios = require("axios");
const $ = require("jquery")
const fetch = require("node-fetch");
const ghProfile = {}
axios
  .get(githubQuery())
  .then((res) => {
   const data = res.data
   //console.log(data)
    assignEasyProperties(data)
    console.log(data.repos_url)
    console.log(data.starred_url.slice(0,-15))
    return axios.all([
        axios.get(data.repos_url),
        axios.get(data.starred_url.slice(0,-15))
      ])
})
   .then((responseArr) => {
    ghProfile.pubRepos = (responseArr[0].data.length);
    ghProfile.starredRepos= (responseArr[1].data.length);
    console.log (ghProfile)
      })

    // axios
    // .get(data.starred_url)
    // .then((starred) => {
    // ghProfile.starredNum = starred.data.length
    // console.log(ghProfile)
    //   })
     

// axios
//     .get(ghdata.repos_url)
//     .then((repos) => {
//         ghProfile.repoNum = repos.data.length
//       console.log(ghProfile)
//       })
//       return data
    
    //  .then((data)=>{
   
//   })
   
   
  

//   promise = fetch(githubQuery())
//   promise.then(function (response){
    //     return response.json();
//   }
//   ).then(json => console.log(json))




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

function githubQuery() {
username = "jasonwilliams"
const queryUrl = `https://api.github.com/users/${username}?per_page=100`;
return queryUrl 
}


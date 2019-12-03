const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};

function generateHTML(color, data) {
  console.log(data)
  for (var propt in data) {
    
    if (data[propt] === "") {
      data[propt] = "N/A"
    }
  }
  const locationLinkStr = data.location.split(' ').join('+');;
  var locationLink = "https://www.google.com/maps/place/" + locationLinkStr;
  
  return `<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Github Profile Finder</title>
      <body>
      <header>
      <h1> Profile Generator </h1>
      </header>
      <div id = "container">
      <div id = "prime-info" class = "item1">
      <img src = "${data.avatar}">
      <div id = "username-div">${data.username}</div>
      </div>
      <div id = "bio-div" class = " font"> Bio: ${data.bio} </div>
      <div id = "location-div" class = " font">Location: ${data.location} <br> <a target = "blank" href = "${locationLink}">Find on google maps</a> </div>
      <br>
      <div id = "blog-div" class = "font">Blog: ${data.blog}</div>
      <br>
      <div id = "url-div" class = "item2 font">
      <a href="${data.url}">Url: ${data.url}</a>
      </div>
      <div id = "repo-div" class = "font" >
      <ul class = "m-left f-left">
      <li>Public Repos: ${data.pubRepos} </li>
      <li>Starred Repos: ${data.starredRepos} </li>
      <li>Following: ${data.following}</li>
      <li>Followers: ${data.followers}</li>
      </ul></div>
      </div>
      </body>

      
      <style>
      *{
        margin: 0;
        padding: 0;
      }
      body{
        background: linear-gradient(90deg, rgba(240,255,255,1) 0%, rgba(240,220,255,1) 35%, rgba(0,249,255,1) 100%);
        color:${colors[color].headerColor};
      }
      h1{
        padding-top: 20px;
          padding-bottom: 20px;
          padding-left: 20px;
      }
      header{
          background-color: ${colors[color].headerBackground};
          font-size: 1.5em
          
      }  
      #container{
          margin-left: 10%;
          margin-right: 10%;
          margin-top: 10%;
          margin-bottom: 10%;
          background-color: ${colors[color].wrapperBackground};
      }
      img{
        height: 300px;
        width: 300px;
      }
      #username-div{
        font-size: 2em;
      }
      #prime-info{
        width: 300px;
        text-align:center;
        
        
      }
      #repo-div{
        grid-column-start:1;
        grid-column-end: 3;
        grid-row-start:6;
        grid-row-end:7;
        text-align:center;
      }
      #bio-div{
        
      }
      #location-div{
        
      }
      #blog-div{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end:5;
      }
      #url-div{
        grid-column-start: 2;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end:4;
      }
      ul {
        list-style-type: none;
        
      }
      ul li{
        display:inline;
        margin-right:35px;
      }
      .m-left{
        
      }

      .font{
        font-size: 1.5em;
      }

      .item1{
        grid-column-start: 1;
        grid-column-end: 2;
        grid-row-start:1;
        grid-row-end: 5;
        
      }
      
      #container{
        display: grid;
        grid-template-columns: 300px auto;
        grid-template-rows: auto auto auto auto auto;
        grid-column-gap: 20px;
      }
      </style>`
}

module.exports = {
  generateHTML,
  colors

}

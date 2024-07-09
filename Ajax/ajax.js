//AJAX
// [0] Request Not Initialized
//   [1] Server Connection Established
//   [2] Request Received
//   [3] Processing Request
//   [4] Request Is Finished And Response Is Ready
//   - Status
//   [200] Response Is Successful
//   [404] Not Found

// let req = new XMLHttpRequest();
// req.open("GET","https://api.github.com/users/elzerowebschool/repos")
// req.send();
// console.log(req);
//   req.onreadystatechange = function(){
//     console.log(req.readyState);
//     console.log(req.status);
//     if(this.readyState === 4 && this.status === 200){
//     console.log(this.responseText)// as string 
//     let jsdata =JSON.parse(this.responseText);
//     console.log(jsdata)
//     for(let i=0 ; i < jsdata.length ; i++){
//       let div =document.createElement("div");
//       let reponame =document.createTextNode(jsdata[i].name);
//       div.appendChild(reponame);
//       document.body.appendChild(div)
//     }
//     }
//   }
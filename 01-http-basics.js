

// Do not need to install, part of node. 
const http = require('http');
const {readFileSync} = require('fs');
// all my files 

const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/css/index.css');
// const homeImages = readFileSync('./images/homless.jpg')


// server takes in request and output responses 
const server = http.createServer((req, res) => { 
      // console.log(req.method)
      // by default no server has functionality. Built by users.
      // request and responses are objects and have many properties. 

      const url = req.url; 
      // homepage 
      if(url === '/'){ 
            // the 200 is a code like 404 
            res.writeHead(200, { 'content-type': 'text/html'}); 
            res.write(homePage);
            res.end();
      } else if(url === '/styles.css'){ 
            // the 200 is a code like 404 
            res.writeHead(200, { 'content-type': 'text/css'}); 
            res.write(homeStyles);
            res.end();
      } else if(url === '/browser-app.js'){ 
            // the 200 is a code like 404 
            res.writeHead(200, { 'content-type': 'text/javascript'});  
            res.write();
            res.end();
      }
      else{   
            
            res.writeHead(404, { 'content-type': 'text/html'}); 
            res.write('<h1>page not found</h1>');
            res.end();
      }
})
server.listen(5000);





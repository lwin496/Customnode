const express = require("express"); 
const path = require("path"); 

const app = express(); 

// Setup staic and middleware 
// HEAD:Unit 2/Node/02-express-tutorial/04-express-app.js


// This will return the html to the page but it will still have errors from the node way. this ise fixed using the .use in the next file.
console.log(__dirname);

app.get('/', (req, res) =>{ 
      // dirname returns the current directory as a string then add on the next files to finish file pathing. 
      // this fucntion will send the response of sending the file index.html when given a request. 

      res.sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
})

app.use(express.static("./navbar-app"));
// app.use(express.static('./navbar-app/css/index/css')) 

app.get('/',(req, res) =>{ 
      res.sendFile(path.resolve(__dirname, "./navbar-app/css/index.css"))



})


app.listen(5000, () =>{ 
      console.log('server is listening on port 5000...')
})
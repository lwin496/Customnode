const express = require('express');
const app = express(); 
// Setup staic and middleware 
// HEAD:Unit 2/Node/02-express-tutorial/04-express-app.js


// This will return the html to the page but it will still have errors from the node way. this ise fixed using the .use in the next file.
const PORT = 5000; 
const {readFileSync} = require('fs');
const path = require('path');
// all the "dependencies"
// adding files to be readable for the server 
const homePage = readFileSync('./navbar-app/index.html');
// const css = readFileSync('./navbar-app/css/index.css');
app.use(express.static('../navbar-app'));
// uses app instead of if statementsnpm 
app.get('/', (req, res) => { 
      console.log('User hit the resouce')
      // doing multiple things in this line  __dirname finds current directory 
      res.status(200).sendFile(path.resolve(__dirname, '../navbar-app/index.html'))
}) 

app.get('/about', (req, res) => { 
      console.log('About Page Reached')
      res.status(200).send("About Page")
}) 

app.get('/showcss',(req, res) => { 
      res.status(200).sendFile(path.resolve(__dirname, '../navbar-app/css/index.css'))
})
app.all('*',(req, res) =>{ 
      res.status(404).send('<h1>Resource not found...</h1>')
})

app.listen(PORT, () =>{ 
      console.log(`Server is running on Port:${PORT}`)
})
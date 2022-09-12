// Express.static is for any site that does not have updating information. 
// this does not mean js chanching the site. 

const express = require('express'); 
const app = express()
 
const path = require("path"); 

// setup static and middleware 

// THIS WILL NOT WORK ON JAVASCRIPT YET BUT YOU AN CLICK IT TO SEE WHAT HAPPENS EHN THE DATA FAILS TO LOAD. 
app.use(express.static('./public'))
app.use(express.static("./public"))



app.all('*', (req, res) =>{ 
      res.status(404).send("resource not found"); 

})


app.listen(5000, () =>{ 
      console.log("server is listening on port 5000.")
})
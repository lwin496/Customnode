const express = require('express'); 
const app = express(); 
const logger = require("./middleware/logger"); 
const authorize = require("./middleware/authorize")

//  req = > middleware => res 

// ORDER MATTERS DO NOT PLACE app.use after home.get things dont work out well for you >:| reponse wwill end before the middleware has a chance to run.  
// app.use(logger); 
// if you have multiple middleware you can call them in an array and they can be used in order. 
// api/home/about/products 
app.get('/', (req, res)=>{ 
      res.send("home")
})
app.get('/about',(req, res)=>{ 
      res.send("about")
})
app.use('/api',[logger, authorize])
// This will apply   the logger ot any path that includes the /api as part of the path Nice way to stop logger on api to stop a certain amount of requqest but sill allow them on the home doc.

app.get('api/products', (req, res) =>{ 
      res.send('Products')
})

app.get('api/items',(req, res) =>{ 
      console.log(req.user)
      res.send('Items')
})

app.listen(5000, ()=>{ 
      console.log(`The server is running on port 5000...`)
})
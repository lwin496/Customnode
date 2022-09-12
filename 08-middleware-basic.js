const express = require('express'); 
const app = express();

// req => middleware => res 
// middle ware is the thinking between request and responses. 

const logger = (req, res, next)=>{   // all middleware requires next as a param 
      const method = req.method; 
      const url = req.url; 
      const time = new Date().getFullYear(); 
      console.log(method, url, time); 
      // example of terminating code in middleware. 
      // res.send('testing')

next(); 
}
app.get('/', logger, (req,res) =>{ 
      res.send("Home"); 
})

app.get('/about',logger, (req, res) =>{ ~
      res.send("About");
})


app.listen(5000, ()=>{ 
      console.log('Server is listening on port 5000....')
})

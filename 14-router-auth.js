const express = require('express')
const router = express('router')


router.post('/', (req, res)=>{ 
      const {name} = req.body
      if(name){ 
            return res.status(200).send(`Welcome ${name}`)
      }
      res.status(401).send("Invalid username or password")
})

module.exports = router; 
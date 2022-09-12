const express = require('express'); 
const app = express(); 

const people = require('./13-router-people');
const auth = require('./14-router-auth');

//  statics assets 

app.use(express.static('./public'));
// parse form data
app.use(express.urlencoded({ extended:false}))
// parse json

app.use(express.json());

app.use('/api/people', people)
app.use('/login',auth)

app.listen(3000,()=>{ 
      console.log('server is listening on port 3000')
})
// // pathway uses 

// app.use('/api/people',people);
// app.use('/login',auth); 



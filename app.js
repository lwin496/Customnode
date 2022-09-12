const express = require('express'); 
const path  = require('path');

const app = express();

// Setup static and middleware 

app.use(express.static('./public'));

app.get('/', (req, res) =>{ 
      console.log.(req.url)
      res.sendFile(path.resolve(__dirname, 'public/index.html'));
})

app.all('*', (req, res) =>{ 
      res.status(404).send('404 Not Found');
})

app.listen(5000 ()=>{ 
      console.log(`the server is running on port 5000`)
});
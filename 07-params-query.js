const express = require('express'); 
const app = express(); 
// products are taken form data.js 
const {products} = require("./data"); 

app.get('/', (req, res) =>{ 
      res.send('<h1> Home page</h1><a href="/api/products">products</a>')
})


app.get("/api/products",(req, res) => { 
      const newProducts = products.map((product) => { 
            const {id, name, image} = product; 
            return {id, name, image}; 
      } )
      res.json(newProducts)
})


app.get('/api/products/:id', (req, res) =>{ 
      let currentId = req.params.id; 
      const newProducts = products.map((product) => { 
            // const {id, name, image} = product; 

            return products[currentId] 
      } )
      res.json(newProducts);
      // console.log(req)
})

// this is how you set up params for the data query 


app.get("/api/products/:productID", (req, res) =>{ 
      const {prodcutID} = req.params; 

      const singleProduct = products.find(
            (product) => product.id === Number(prodcutID)
      )
      if(!singleProduct) { 
            return res.status(404).send("Product Does not Exist")
      }
      return res.json(singleProduct)
})

// returns an object holds all of the params from the url as properties 

app.get("/api/products/:productID/reviews/:reviewID", (req, res) =>{ 
      res.send("hello world");

})

// sets up query that you can grab 

app.get("/api/v1/query", (req, res) =>{ 
      const {serach, limit} = req.query 
      let sortedProducts = [...products]
      if(search){ 
            sortedProducts = sortedProducts.filter((product) =>{ 
                  return product.name.startsWith(search); 
            })
      }
      if (limit) { 
            sortedProducts = sortedProducts.slice(0,Number(limit))
      }
      if(sortedProducts.length < 1){ 
            // res.status(200).send('no products matched your result
            return res.status(200).json({sucess: true, data: []})
      }
      res.status(200).json(sortedProducts)
})

app.listen(5000, () =>{ 
      console.log("server is listening on port 5000....")
})
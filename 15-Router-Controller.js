let {people} = require('./data'); 

const getPeople = (req,res) =>{ 
      res.status(200).json({success:true, data:people});
}

const createPerson = (req,res) =>{ 
      const {name} = req.body;
      if(!name){
            return res
                  .status(400)
                  .json({success:false, msg:'Please provide valid id'})
      }
      res.status(201).send({success:true, person:name});
}

const updatePerson = (req,res) =>{ 
      res.status(201).send({success:true, person:name});
}

const deletePerson = (req,res) =>{ 
      res.status(201).send({success:true, person:name});
}

const createPersonPostman = (req,res) =>{ 
      res.status(201).send({success:true, person:name});
}
//getPeople,createPerson, updatePerson, deletePerson,createPersonPostman
module.exports = {getPeople,createPerson,updatePerson,deletePerson,createPersonPostman}
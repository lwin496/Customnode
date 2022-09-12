const express = require('express');
const router = express.Router(); 
// const app = express();


const {getPeople,createPerson, updatePerson, deletePerson,createPersonPostman} = require('./15-Router-Controller');
// destructuring to get constants that represent functions 




router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').post(updatePerson).delete(deletePerson)

module.exports = router;

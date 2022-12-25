const express = require('express');
const router = express.Router();
const CreateProfile = require('../models/CreateProfile');
const { body, validationResult } = require('express-validator');

router.post('/createuser',   body('email').isEmail(),
// password must be at least 5 chars long
body('name').isLength({ min: 5 }),
body('password','Incorrect Password').isLength({ min: 5 }),async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
 try{
await   CreateProfile.create({
    name: req.body.name,
  mobile: req.body.mobile,
  email: req.body.email,
  address: req.body.address,
  password:req.body.password
   })
   res.json({"success":true});
 }catch(error){
console.log(error)
res.json({"success":false});

 }


    /*
    
  const { name, mobile, email, address } = req.body;

  CreateProfile.create({ name, mobile, email, address }, (error, createProfile) => {
    if (error) {
      res.status(500).json({ error: 'Failed to create profile' });
    } else {
      res.status(200).json({ createProfile });
    }
    "name": "John Doe",
  "mobile": "123-456-7890",
  "email": "john.doe@example.com",
  "address": "123 Main St"
  });*/
});

module.exports = router;





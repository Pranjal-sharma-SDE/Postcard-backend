const mongoose=require('mongoose')
const { Schema } = mongoose;

const createProfileSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    mobile: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    address: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  });
  
  module.exports = mongoose.model('CreateProfile', createProfileSchema);
  
  


  
  /*
  CreateProfile.create({
  name: 'John Doe',
  mobile: '123-456-7890',
  email: 'john.doe@example.com',
  address: '123 Main St'
}, (error, createProfile) => {
  if (error) {
    // Handle the error
  } else {
    console.log(createProfile);
  }
});
  */
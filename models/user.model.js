const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required:true,
        minlength:[3,'username must be atleast 3 char long'],

    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:[5,'password must be atleast 5 char long'],

    },
    email:{
        type:String,
        unique:true,
        trim:true,
        lowercase:true,
        required:true,
        minlength:[13,'email must be atleast 13 char long'],

    },
})

const userModel = mongoose.model('user',userSchema);
module.exports = userModel;
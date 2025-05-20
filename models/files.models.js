const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    path:{
        type:String,
        required:[true,'path is required']
    },
    orignalName:{
        type:String,
        required:[true,'orignalName is required']
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users',
        required:[true,,'user is required']
    }
})

const file = mongoose.model('files',fileSchema);

module.exports = file;
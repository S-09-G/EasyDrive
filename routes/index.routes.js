const express = require('express');
const router = express.Router();
const firebase = require('../config/firebase.config')
const authMiddleWare = require('../middlewares/auth');
const fileModel = require('../models/files.models');

const upload = require('../config/multer.config');

router.get('/home',authMiddleWare,async (req,res)=>{

    const userFiles = await fileModel.find({
        user:req.user.userId
    })
    res.render('home',{
        file:userFiles
    }); 
})
router.post('/upload',authMiddleWare,upload.single('file'),async(req,res)=>{
    const newFile = await fileModel.create({
        path:req.file.path,
        orignalName:req.file.originalname,
        user:req.user.userId 
    })
    res.redirect('/home')
})

router.get('/download/:path',authMiddleWare,async(req,res)=>{
    const path = req.params.path;
    const loggedInUser = req.user.userId;

    console.log(path)

    const file = await fileModel.findOne({
        path:path,
        user:loggedInUser
    })
    if(!file){
        return res.status(401).json({
            message:'unauthorized access'
        })
    }

    const signedUrl = await firebase.storage().bucket().file(path).getSignedUrl({
        action:'read',
        expires: Date.now() + 1000*60,
         responseDisposition: `attachment; filename="${file.orignalName}"`,
    })

    res.redirect(signedUrl[0]);

})




module.exports = router;
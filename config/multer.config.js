const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../drivec-874f5-firebase-adminsdk-fbsvc-0a89a5a636.json');
const storage = firebaseStorage({
    credentials:firebase.credential.cert(serviceAccount),
    bucketName:'drivec-874f5.firebasestorage.app',
    unique:true
})

const upload = multer({
    storage:storage,

})

module.exports = upload;
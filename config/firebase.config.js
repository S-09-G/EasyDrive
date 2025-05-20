const Firebase = require('firebase-admin');
const serviceAccount = require('../drivec-874f5-firebase-adminsdk-fbsvc-0a89a5a636.json');
const firebase = Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:'drivec-874f5.firebasestorage.app'
})

module.exports = Firebase;


var admin = require("firebase-admin");

var serviceAccount = require("/smartparking-8dcd2-firebase-adminsdk-2whbn-66a989a40a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://smartparking-8dcd2-default-rtdb.europe-west1.firebasedatabase.app"
});
const db = admin.firestore(); 

module.exports = { admin, db } ;

const functions = require('firebase-functions')
const express = require("express")
const app = express();
const placesRouter = require('./controllers/place_controller')

app.use(express.json())
app.use('/places', placesRouter)

exports.api = functions.https.onRequest(app)

// To handle "Function Timeout" exception
exports.functionsTimeOut = functions.runWith({
    timeoutSeconds: 300
});
app.listen(8080, function () { 
console.log(`Demo project at: 8080!`); });

//exports.setupdb = functions.https.onRequest(require('./setup_database'))
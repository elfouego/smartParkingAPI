const functions = require('firebase-functions')
const express = require("express")
const app = express();
const placesRouter = require('./controllers/place_controller')
const port=3000;

app.use(express.json())
app.use('/places', placesRouter)
app.get("/",(req,res)=>res.send("Hello world"));


app.listen(process.env.PORT|| port,()=>console.log('example app listening at http://localhost:${'+port+'}'));

//exports.setupdb = functions.https.onRequest(require('./setup_database'))

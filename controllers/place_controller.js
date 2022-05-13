/*const { db } = require("../utils/admin");
const placeRef = db.collection("place");

exports.getAllplaces = async (req, res) => { 
      placeRef
    .get()
    .then((data)=>{
        let user=[];
        data.forEach((doc)=>{
            user.push({
                idUser: doc.id,
                ...doc.data(),
            });
        });
        return res.json(user);
    })
    .catch((err)=> console.error(err));
} ;

// recupérer un user en BD
exports.getPlace = (req,res)=>{
    const document = placeRef.doc(req.params.idPlace);
    
    document
        .get()
        .then((doc)=>{
            let user ={
                idUser:doc.id,
                ...doc.data(),
            };
            return res.json(user);
        })
        .catch((err)=>console.error(err));
};
exports.updatePlace = (req,res)=>{
    
   let placeDetails =req.body;

    const document = placeRef.doc(req.params.idPlace);
    document
        .update(placeDetails)
        .then(()=>{
            return res.json({ message: "Details added successfuly"});
            })
            .catch((err)=>{
                console.error(err);
                return res.status(500).json({error: err.code});
            });
};
*/
const placeModel = require('../models/place_model')
const express = require('express')
const router = express.Router()

// Get all todos
router.get('/', async (req, res, next) => {
    try {
        const result = await placeModel.get()
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Get one todo
router.get('/:id', async (req, res, next) => {
    try {
        const result = await placeModel.getById(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Create a new todo
router.post('/', async (req, res, next) => {
    try {
        const result = await placeModel.create(req.body)
        if (!result) return res.sendStatus(409)
        return res.status(201).json(result)
    }
    catch (e) {
        return next(e)
    }
})

// Delete a todo
router.delete('/:id', async (req, res, next) => {
    try {
        const result = await placeModel.delete(req.params.id)
        if (!result) return res.sendStatus(404)
        return res.sendStatus(200)
    }
    catch (e) {
        return next(e)
    }
})

// Update a todo
router.patch('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const data = req.body

        const doc = await placeModel.getById(id)
        if (!doc) return res.sendStatus(404)

        // Merge existing fields with the ones to be updated
        Object.keys(data).forEach((key) => doc[key] = data[key])

        const updateResult = await placeModel.update(id, doc)
        if (!updateResult) return res.sendStatus(404)

        return res.json(doc)
    }
    catch (e) {
        return next(e)
    }
})

// Replace a todo
router.put('/:id', async (req, res, next) => {
    try {
        const updateResult = await placeModel.update(req.params.id, req.body)
        if (!updateResult) return res.sendStatus(404)

        const result = await placeModel.getById(req.params.id)
        return res.json(result)

    }
    catch (e) {
        return next(e)
    }
})

module.exports = router
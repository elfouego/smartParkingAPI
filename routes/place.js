const express = require("express");
const router = express.Router();
const {
    updatePlace, getAllplaces,
  
} = require('../controllers/place_controller');

// GET DATA OF PLACES
router.route("/").get(getAllplaces);
// UPDATE ONE PLACE
router.route("/:idPlace").pacth(updatePlace);
// DELETE ONE PLACE
//router.route("/delete/:idUser").delete(deletePlace);

module.exports = router;

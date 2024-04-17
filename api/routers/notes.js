const express = require("express");
const Notes = require("../models/notes");
const notes = require("../models/notes");

const router = express.Router();

//save notes

router.post("/notes/save", (req, res) => {
  let newNotes = new Notes(req.body);

  newNotes
    .save()
    .then(() => {
      return res.status(200).json({
        success: "Notes Saved successfully",
      });
    })

    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
});

//get Notes
router.get("/notes/get", (req, res) => {
  Notes.find()
    .exec()
    .then((notes) => {
      return res.status(200).json({
        success: true,
        existingNotes: notes,
      });
    })

    .catch((err) => {
      return res.status(400).json({
        error: err,
      });
    });
});

//update Notes

router.put('/notes/update/:id')


module.exports = router;

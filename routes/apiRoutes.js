// dependencies
const router = require("express").Router();
const Notes = require("../db/Notes");

// get request for existing notes
router.get("/notes", (req, res) => {
    Notes.getNotes()
    .then(notes => res.json(notes))
    .catch((err) => res.status(500).json(err))

})

// post request for new notes
router.post("/notes", (req, res) => {
    Notes.addNotes(req.body)
    .then((note) =>)
})
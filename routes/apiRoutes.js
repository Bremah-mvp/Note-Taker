// dependecies
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

let savedNotes = [];

fs.readFile('./db/db.json', (err, data) => {
  if (err) throw err;
  savedNotes = JSON.parse(data);
});

rewriteDB = () => {
  fs.writeFile('./db/db.json', JSON.stringify(savedNotes), (err) => {
    if (err) throw err;
  });
};

module.exports = function (app) {

  app.get('/api/notes', (req, res) => {
    res.send(savedNotes);
  });

  app.post("/api/notes", (req, res) => {
    const thisNote = req.body
    thisNote.id = (uuidv4());
    savedNotes.push(thisNote);
    rewriteDB();
    res.send(savedNotes);
  });

  // delete saved notes
  app.delete(`/api/notes/:id`, (req, res) => {
    idToDelete = req.params.id;
    for (let i = 0; i < savedNotes.length; i++) {
      if (savedNotes[i].id === idToDelete) {
        savedNotes.splice(i, 1);
        rewriteDB();
        res.send(savedNotes);
        return;
      }
    }
  });
};




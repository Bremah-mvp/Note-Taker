const fs = require("fs");
const util = require("util");
const {v4: uuidv4 } = require("uuid");

//reading note
const readFileAsync = util.promisify(fs.readFile);

// writing note
const writeFileAsync = util.promisify(fs.writeFile);

// notes contructor
class notes {
   
    // read note function
    read() {
        return readFileAsync("db/db.json", "utf-8")
    };

    // write note function
    write(note) {
        return writeFileAsync("db/db.json", JSON.stringify(note))
    };

    // get notes function
    getNotes() {
        return this.read().then((notes) => {
            // naming array
            let notesArr;

            // conacting parsed notes into array
            try {
                notesArr = [].concat(JSON.parse(notes))
            }
            catch (err) {
                notesArr = [];
                // otherwise return an empty array
            }
            // return array
            return notesArr

        })
    };

    // adding new note
    addNote(note) {
        // with the title and text
        const { title, text } = note;

        // title and text must have content to save
        if (!title || !text) {
            throw new Error("pliz write something in the note! ")
        };

        // new note objectbwith title, text, and id
        const newNote = {tittle, text, id: uuidv4()};

        // this expands our notes array, adds the new note to the end, creates a NEW ARRAY called "updated Notes" with the new note and writes the NEW ARRAY
        return this.getNotes().then((notes) => [...notes, newNote]).then((updatedNotes) => this.write(updatedNotes)).then(() => newNote);
    }
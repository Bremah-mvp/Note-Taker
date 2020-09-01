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
            
        })
    }
}
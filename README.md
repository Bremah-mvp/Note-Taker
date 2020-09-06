# NOTE-TAKER APPLICATION
Table of Contents
Description
Deployed Link
Screenshots
Technologies
Installation
Usage
License
Questions
Deployed Link
Deployed on Heroku at: Express Note Taker
Express Note Taker
License: MIT

Description
The note taker application allows a user to write, save, delete, and view previously saved notes. It uses an Express backend to save and retrive note data from a JSON file. 

 
     HOW IT WORKS

User simply just loads the app in is favourite browser and write desired notes, save them if he/ she wishes to, application provides you with the ability to have note titles for easy identification, user can also revist the saved notes, delete or get rid of the ones he doesnot need anymore.



The back end contains the following routes:
HTML Routes
GET /notes - Returns the notes.html file.
GET * - Returns the index.html file
API Routes
GET /api/notes - Reads the db.json file and returns all saved notes as JSON.
POST /api/notes - Receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.
DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete, removes the note with the given id property, and then rewrites the notes to the db.json file.
User Story
AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete



Screenshots
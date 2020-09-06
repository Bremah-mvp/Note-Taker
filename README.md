# NOTE-TAKER APPLICATION
              Table of Contents

-Description
-How it works
-Technlogies used
-Screenshots
-Deployed Link
-Installation
-Usage
-License
-Questions
-Deployed on Heroku at:  Note Taker

Description
The note taker application allows a user to write, save, delete, and view previously saved notes. It uses an Express backend to save and retrive note data from a JSON file. 

 
     HOW IT WORKS

User simply just loads the app in is favourite browser and write desired notes, save them if he/ she wishes to, application provides you with the ability to have note titles for easy identification, user can also revist the saved notes, delete or get rid of the ones he/she doesnot need anymore.

  TECHNOLOGIES USED TO CREATE THE APPLICATION

  HTML /BOOTSTRAP 
  
  As usual used some html to generate and design the user interface.

 JAVASCRIPT 

This application was built based mostly on javascript . most of the files needed to get the application running were created with java script and put together to using visual studio.

NODE.JS 
Node is a javascript library that provides additional functionalities that browsers cannot forexample access to local machine file directory. 
used node to test if the app functions correctly before deloying it to heroku.

 EXPRESS  to create the following routes:

HTML Routes

GET /notes - Returns the notes.html file.

GET * - Returns the index.html file

API Routes

GET /api/notes - Reads the db.json file and returns all saved notes as JSON.

POST /api/notes - Receives a new note to save on the request body, adds it to the db.json file, and then returns the new note to the client.

DELETE /api/notes/:id - Receives a query parameter containing the id of a note to delete, removes the note with the given id property, and then rewrites the notes to the db.json file.


Screenshots
![picture](https://github.com/Bremah-mvp/Note-Taker/blob/master/public/assets/Annotation%202020-09-05%20224309.png)

Deployed Link at heroku : https://drive.google.com/file/d/1obpAHGOgynDpGoshALDKyYvBaYdeZY7T/view

Installation
To install dependencies, run the following:

npm i

Usage
After downloading the files and installing dependencies, run

node server.js

License
This repository is licensed under the MIT license.

Questions
Questions about this repository? Please contact me at mvpbremah@gmail.com. View more of my work in GitHub Bremah-mvp 
//import dependecies
const express = require("express");
require("dotenv").config();
const connectToDb = require("./config/connectTODB");
const controllers = require("./controllers/notesController");

//create an express app
const app = express();
app.use(express.json());

//connection to mongo
connectToDb();

//routing

app.post("/notes", controllers.addNotes);

app.get("/notes", controllers.fetchnotes);

app.get("/note/:id", controllers.fetchOneNoteById);

app.put("/note/:id", controllers.updatebyId);

app.delete("/note/:id", controllers.deleteById);

//start server
app.listen(process.env.PORT, () => {
  console.log(`Server started at ${process.env.PORT}`);
});

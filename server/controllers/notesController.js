const Note = require("../models/note");

const addNotes = async (req, res) => {
  //get the data
  const { title, body } = req.body;
  //create a note with it
  const notes = await Note.create({ title, body });
  //respond with data
  res.json({ notes: notes });
};
const fetchnotes = async (req, res) => {
  //get notes
  const notes = await Note.find();
  //respond with data
  res.json({ notes: notes });
};

const fetchOneNoteById = async (req, res) => {
  //get id
  const noteId = req.params.id;
  //Find by id
  const note = await Note.findById(noteId);
  //respond data
  res.json({ note: note });
};

const updatebyId = async (req, res) => {
  //get id
  const noteId = req.params.id;
  const { title, body } = req.body;
  //find and update
  const note = await Note.findByIdAndUpdate(
    noteId,
    { title, body },
    { new: true }
  );
  //return the response
  res.json({ note: note });
};

const deleteById = async (req, res) => {
  try {
    //get id
    const noteId = req.params.id;
    //delete data
    await Note.findByIdAndDelete(noteId);
    //return a msg
    res.json({ success: "Successfully deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  addNotes,
  fetchnotes,
  fetchOneNoteById,
  updatebyId,
  deleteById,
};

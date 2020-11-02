import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import runtimeEnv from "@mars/heroku-js-runtime-env";
import { Form } from "./components/form";
import { List } from "./components/list";
// import { Note } from "./components/note";
import { EditModal } from "./components/EditModal";
import { getNotes } from "./actions";

// import { v4 as uuidv4 } from "uuid";
const env = runtimeEnv();

export const apiBaseUrl = env.REACT_APP_API_URL || "http://localhost:5000";

function App() {
  const [noteId, setNoteId] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [notes, setNotes] = useState([]);
  const [editing, setEditing] = useState(false);

  const [showColorPicker, setShowColorPicker] = useState(false);
  const [color, setColor] = useState("#eb9694");

  const fetchNotes = async () => {
    const fetchedNotes = await getNotes();
    setNotes(fetchedNotes);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleColor = (selectedColor) => {
    setColor(selectedColor);
    setShowColorPicker(false);
    // console.log( 'default color is:',color)
  };

  const handleTitle = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const note ={title, description, color, id}
    if (title !== "" && description !== "") {
      // setNotes([...notes, { title, description, color, id: uuidv4() }]);

      try {
        const response = await axios.post(`${apiBaseUrl}/notes`, {
          title,
          description,
          color,
        });
        const note = await response.data;
        fetchNotes();
        clearFields();
        console.log(notes);
        // return setNotes([...notes, note]);
        // console.log(note);
      } catch (err) {
        console.log(err);
      }

      // console.log("note was created");
    } else {
      console.log("must have title and description");
    }
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
    setColor("#fff");
  };

  const handleDelete = (id) => {
    console.log("note deleted", id);
    try {
      axios.delete(`${apiBaseUrl}/notes/${id}`);
      const tempNotes = notes.filter((item) => item.id !== id);
      setNotes(tempNotes);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (id) => {
    console.log("DDDD");
    setEditing(true);
    setNoteId(id);
    console.log("editing note", id);
  };

  const updateNote = async ({ newTitle, newDescription, newColor }) => {
    const response = await axios.put(`${apiBaseUrl}/notes/${noteId}`, {
      newTitle,
      newDescription,
      newColor,
    });

    const updatedNotes = notes.map((note) =>
      note.id === noteId
        ? {
            ...note,
            title: newTitle,
            description: newDescription,
            color: newColor,
          }
        : note
    );
    setNotes(updatedNotes);

    // setNotes({...note,title: newTitle, description: newDescription, color: newColor })
    // console.log("note was updated");
    // console.log(notes);
    setEditing(false);
  };

  return (
    <div className="App">
      <h1 style={{ fontSize: 48 }}>My Notes</h1>
      <Form
        handleSubmit={handleSubmit}
        handleTitle={handleTitle}
        handleDescription={handleDescription}
        title={title}
        description={description}
        handleColor={handleColor}
        color={color}
        showColorPicker={showColorPicker}
        setShowColorPicker={setShowColorPicker}
      />
      {/* {console.log("HELLO", editing)} */}
      {editing && noteId ? (
        <EditModal
          title={title}
          description={description}
          updateNote={updateNote}
          note={notes.find((note) => note.id === noteId)}
          onClose={() => setEditing(false)}
          showColorPicker={showColorPicker}
          setShowColorPicker={setShowColorPicker}
        />
      ) : null}

      <List
        notes={notes}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        color={color}
        handleColor={handleColor}
      />
      {/* <Note note={note} /> */}
      {/* <Modal /> */}
    </div>
  );
}

export default App;

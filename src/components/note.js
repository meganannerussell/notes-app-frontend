import React from "react";
import "./note.css";

import "semantic-ui-css/semantic.min.css";
import { Icon } from "semantic-ui-react";

export const Note = ({ note, handleDelete, handleEdit }) => {
  const { color, title, description, id } = note;

  console.log(id)

  const deleteNote = () => {
    handleDelete(id);
  };

  const editNote = () => {
    handleEdit(id);
  };

  return (
    <div style={{backgroundColor:color, zIndex:-100}} className="note">
      <h2>{title}</h2>
      <div style={{paddingBottom:20}}>{description}</div>
      <div style={{ textAlign: "end" }}>
        <button
          style={{opacity:'100%'}}
          onClick={editNote}
          className="editbtn"
        >
          <Icon link name="pencil" />
        </button>
        <button 
        style={{opacity:'100%'}}
        onClick={deleteNote} 
        className="editbtn">
          <Icon link name="close" />
        </button>
      </div>
    </div>
  );
};

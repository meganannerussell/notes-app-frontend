import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";
import "./editModal.css";
import tick from "../assets/tick.svg";
import { GithubPicker } from "react-color";
import colorpicker from "../assets/colorpicker.svg";

export const EditModal = ({ updateNote, note, onClose }) => {
  const [newTitle, setTitle] = useState(note.title);
  const [newColor, setNewColor] = useState(note.color);
  const [newDescription, setDescription] = useState(note.description);
  const [showNewColorPicker, setNewShowColorPicker] = useState(false);

  return (
    <Modal
      style={{ width: "30%", height: 200, borderRadius: 20 }}
      closeIcon
      open
      header="Reminder!"
      onClose={() => onClose(false)}
      actions={["Snooze", { key: "done", content: "Done", positive: true }]}
    >
      <Modal.Content style={{ height: "100%" }}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateNote({ newTitle, newDescription, newColor });
          }}
          className="editForm"
        >
          <div
            style={{ display: "flex", flexDirection: "column", paddingTop: 8 }}
          >
            <input
              style={{
                height: 35,
                borderStyle: "none",
                marginBottom: 10,
                fontSize: 18,
              }}
              value={newTitle}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
            <textarea
              style={{ height: 100, borderStyle: "none" }}
              value={newDescription}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
            />
          </div>
          <div>
            <div>
              <button
                style={{
                  backgroundColor: newColor,
                  // right: "2.2rem",
                  // bottom: "-3rem",
                }}
                className="colorBtnModal"
                type="button"
                onClick={() => setNewShowColorPicker(!showNewColorPicker)}
              >
                <img
                  style={{
                    padding: 5,
                    paddingLeft: 1,
                    paddingBottom: 8,
                    width: 25,
                  }}
                  alt="picker"
                  src={colorpicker}
                />
              </button>
              {showNewColorPicker && (
                <div style={{ zIndex: 200 }}>
                  <GithubPicker
                    className="colorPicker"
                    onChange={(selectedColor) => setNewColor(selectedColor.hex)}
                    color={newColor}
                  />
                </div>
              )}

              <button
                className="editBtn"
                onClick={{ updateNote }}
                primary
                content="Done"
              >
                <img
                  style={{ padding: 5, paddingLeft: 1, paddingBottom: 8 }}
                  alt="tick"
                  src={tick}
                />
              </button>
            </div>
          </div>
        </form>
      </Modal.Content>
    </Modal>
  );
};

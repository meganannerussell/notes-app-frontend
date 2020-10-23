import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import { Modal } from "semantic-ui-react";
import "./editModal.css";
import tick from "../assets/tick.svg";

export const EditModal = ({ updateNote, note, onClose }) => {
  const [newTitle, setTitle] = useState(note.title);
  const [newDescription, setDescription] = useState(note.description);

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
          onSubmit={() => updateNote({ newTitle, newDescription })}
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
        </form>
      </Modal.Content>
    </Modal>
  );
};

// {/* <Form
// style={{ boxShadow: "none" }}
// onSubmit={() => updateNote({ newTitle, newDescription })}
// >
// <Form.Field>
//   {/* <h3>Title</h3> */}
//   <input
//     value={newTitle}
//     onChange={(e) => setTitle(e.target.value)}
//     placeholder="Title"
//   />
// </Form.Field>
// <Form.Field>
//   {/* <h3>Description</h3> */}
//   <textarea
//     style={{ height: 100 }}
//     value={newDescription}
//     onChange={(e) => setDescription(e.target.value)}
//     placeholder="Description"
//   />
// </Form.Field>
// <Button onClick={{ updateNote }} primary content="Done" />
// </Form> */}

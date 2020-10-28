import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
// import { Input, Button } from "semantic-ui-react";
import { GithubPicker } from "react-color";
import "./form.css";
import colorpicker from "../assets/colorpicker.svg";

export const Form = ({
  handleTitle,
  handleDescription,
  handleSubmit,
  handleColor,
  color,
  title,
  description,
  setShowColorPicker,
  showColorPicker,
}) => {
  // const [color, setColor] = useState("#fff");
  // const [titleInput, setTitleInput] = useState(title);
  // const [descriptionInput, setDescriptionInput] = useState(description);

  return (
    <form className="form" onSubmit={handleSubmit} style={{zIndex:200}}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          style={{
            height: 35,
            borderStyle: "none",
            marginBottom: 10,
            fontSize: 18,
          }}
          onChange={handleTitle}
          value={title}
          placeholder="Title..."
        />
        <textarea
          style={{ height: 100, borderStyle: "none" }}
          onChange={handleDescription}
          border="none"
          placeholder="Write your note here..."
          value={description}
        />
      </div>
      <div>
        <button
          style={{ backgroundColor: color }}
          className="colorBtn"
          type="button"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          <img
            style={{ padding: 5, paddingLeft: 1, paddingBottom: 8, width: 25 }}
            alt="picker"
            src={colorpicker}
          />
          {showColorPicker ? "close" : "pick"}
        </button>
        {showColorPicker && (
          <div style={{ zIndex: 200 }}>
            <GithubPicker
              className="colorPicker"
              onChange={(selectedColor) => handleColor(selectedColor.hex)}
              // onChange={updatedColor => handleColor(updatedColor.hex)}
              // onChange={(color) => console.log(color)}
              color={color}
              // onChange={(updatedColor) => setColor(updatedColor.hex)}
            />
          </div>
        )}
        {/* <h2>you picked{color}</h2> */}
        {/* {console.log("hello this is", color)} */}

        <button type="submit" className="btn">
          +
        </button>
      </div>
    </form>
  );
};

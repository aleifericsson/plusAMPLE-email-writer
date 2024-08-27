/*
import { useState } from "react";
import { WithContext as ReactTags } from "react-tag-input";
import '../styles/InputTags.css'
*/

const { useState } = require("react");
const ReactTags = require("react-tag-input").WithContext;
require('../styles/InputTags.css');


// Specifies which characters should terminate tags input. An array of character codes.
const KeyCodes = {
  comma: 188,
  enter: 13,
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

export default function InputTag(){
  const [tags, setTags] = useState([]);

  // Method to delete tag from Array
  const handleDelete = (i) => {
    setTags(tags.filter((tag, index) => index !== i));
  };

  // Method to Add tag into Array
  const handleAddition = (tag) => {
    setTags([...tags, tag]);
  };
  return (
    <div id="tags">
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        inputFieldPosition="bottom"
        autocomplete
        allowDragDrop={false}
      />
    </div>
  );
};

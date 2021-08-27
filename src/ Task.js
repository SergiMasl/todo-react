import React from "react";

function Task({ addTdo, text, handler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Type todo..."
        value={text}
        onChange={handler}
      />
      <button
        onClick={() => {
          addTdo(text);
        }}
        type="button"
      >
        +
      </button>
    </div>
  );
}

export default Task;

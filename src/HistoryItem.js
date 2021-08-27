import React from "react";

function HistoryItem({ delTodo, text, status, id, setStatus }) {
  return (
    <li>
      <p>{text}</p>
      <input
        type="checkbox"
        checked={status}
        onChange={() => {
          setStatus(id);
        }}
      />
      <button onClick={() => delTodo(id)}>x</button>
    </li>
  );
}

export default HistoryItem;

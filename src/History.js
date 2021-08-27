import React from "react";
import HistoryItem from "./HistoryItem";

function History({ todos, text, delTodo, setStatus }) {
  return (
    <section>
      <ul>
        {todos.map((item) => [
          <HistoryItem
            key={item.id}
            text={item.text}
            status={item.status}
            delTodo={delTodo}
            id={item.id}
            setStatus={setStatus}
          />,
        ])}
      </ul>
    </section>
  );
}

export default History;

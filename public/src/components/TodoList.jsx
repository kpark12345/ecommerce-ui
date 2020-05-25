import React from "react";

let TodoList = props => {
  return (
    <div>
      <input
        value={props.todoEntry}
        onChange={e => {
          props.handleTodoEntry(e.target.value);
        }}
      />

      <button
        onClick={e => {
          e.preventDefault();
          props.handleAddTodo(props.entry);
        }}
      >
        Add todo!
      </button>
    </div>
  );
};

export default TodoList;
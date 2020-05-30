import React from "react";

const TodoList = props => {
  return (
    <div style={{backgroundColor: 'black'}}>
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
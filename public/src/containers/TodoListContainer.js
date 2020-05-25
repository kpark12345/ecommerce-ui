import { connect } from "react-redux";
import TodoList from "./../components/TodoList.jsx";
import handleTodoEntry from "./../actions/handleTodoEntry.js";
import handleAddTodo from "./../actions/handleAddTodo.js";



var mapStateToProps = store => ({
  entry: store.entry,
  todos: store.todos
});

var mapDispatchToProps = dispatch => ({
  handleTodoEntry: event => {
    dispatch(handleTodoEntry(event));
  },
  handleAddTodo: todo => {
    dispatch(handleAddTodo(todo));
  }
});

var TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
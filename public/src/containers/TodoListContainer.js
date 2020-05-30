import { connect } from "react-redux";
import TodoList from "./../components/TodoList.jsx";
import handleTodoEntry from "./../actions/handleTodoEntry.js";
import handleAddTodo from "./../actions/handleAddTodo.js";



const mapStateToProps = store => ({
  entry: store.entry,
  todos: store.todos
});

const mapDispatchToProps = dispatch => ({
  handleTodoEntry: event => {
    dispatch(handleTodoEntry(event));
  },
  handleAddTodo: todo => {
    dispatch(handleAddTodo(todo));
  }
});

const TodoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default TodoListContainer;
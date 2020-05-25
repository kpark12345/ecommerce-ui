import { connect } from "react-redux";
import RenderTodos from "./../components/RenderTodos.jsx";

var mapStateToProps = store => ({
  todos: store.todos
});

var mapDispatchToProps = dispatch => ({
  
});

var RenderTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderTodos);

export default RenderTodosContainer;
import { connect } from "react-redux";
import RenderTodos from "./../components/RenderTodos.jsx";

const mapStateToProps = store => ({
  todos: store.todos
});

const mapDispatchToProps = dispatch => ({
  
});

const RenderTodosContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderTodos);

export default RenderTodosContainer;
import React from "react";
import { hot } from 'react-hot-loader/root';
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";

class App extends React.Component {
  render() {
    return (
      <div>
     <TodoListContainer />
     <RenderTodosContainer />
   </div>
    )
  }
}

export default hot(App);

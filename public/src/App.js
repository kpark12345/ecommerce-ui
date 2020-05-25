import React from "react";
import { hot } from 'react-hot-loader/root';
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";
import HeaderContainer from "./containers/HeaderContainer";

// import Container from "@material-ui/core/Container";

class App extends React.Component {
  render() {
    return (
      <div style={{marginLeft:'10px', marginRight:'10px'}}>
      <HeaderContainer/>
     <TodoListContainer />
     <RenderTodosContainer />
   </div>
    )
  }
}

export default hot(App);

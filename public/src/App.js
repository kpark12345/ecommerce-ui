import React from "react";
import { hot } from 'react-hot-loader/root';
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";


class App extends React.Component {
  render() {
    return (
      <div>
      <HeaderContainer/>
      <BodyContainer/>
    
   </div>
    )
  }
}

export default hot(App);

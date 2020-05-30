import React from "react";
import { hot } from 'react-hot-loader/root';
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import Box from '@material-ui/core/Box';


class App extends React.Component {
  render() {
    return (
      <div style={{maxHeight: '1000px'}}>
      <HeaderContainer/>
      <BodyContainer/>
      <FooterContainer/>
     </div>
    )
  }
}

export default hot(App);

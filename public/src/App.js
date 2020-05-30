import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import TodoListContainer from "./containers/TodoListContainer";
import RenderTodosContainer from "./containers/RenderTodosContainer";
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";
import Box from '@material-ui/core/Box';



const App = props => {
  const [state, setWidth] = React.useState({ 
    width: window.innerWidth
  })
  
  useEffect(() => {
    function handleResize() {
      setWidth({
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
})
  
  const renderView = () => {
    if (state.width <= 712) {
      console.log('here')
      return;
    } else {
      // console.log('WIDTH: ', state.width)
      return <div><HeaderContainer/><BodyContainer/><FooterContainer/></div>
    }
  }
  return (
    <div style={{maxHeight: '1300px'}}>
      {renderView()}
    </div>
    ) 
}

export default hot(App);

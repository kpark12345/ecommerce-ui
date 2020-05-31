import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import HeaderContainer from "./containers/HeaderContainer";
import BodyContainer from "./containers/BodyContainer";
import FooterContainer from "./containers/FooterContainer";

import MobileHeaderContainer from "./containers/MobileHeaderContainer";




const debounce = (fn, ms) => {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const App = props => {
  const [state, setWidth] = React.useState({ 
    isMobile: window.innerWidth <= 1022 ? true : false
  })
  

  useEffect(() => {
   const debouncedHandleResize = debounce(() => {
      if(window.innerWidth <= 1022) {
        setWidth({
          isMobile: true
        })
      } else if (window.innerWidth > 1022) {
        setWidth({
          isMobile: false
        })
      }
    }, 300)
   return window.addEventListener('resize', debouncedHandleResize)
})
  
  const renderView = () => {
    if (state.isMobile === true) {
      console.log('mobile')
      return <div><MobileHeaderContainer/></div>
    } else {
      console.log('browser', window.innerWidth)
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

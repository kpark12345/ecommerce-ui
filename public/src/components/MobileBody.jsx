import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileMerchContainer from "../containers/MobileMerchContainer";
import MobileProductContainer from "../containers/ProductContainer";
const useStyles = makeStyles(theme => ({
  root: {
    background: 'black',
    height: '1330px',
    margin:'-10px'
  }
}));

const MobileBody = props => {
  const classes = useStyles();

  const renderView = () => {
    if (props.productClicked === true) {
      console.log("product clicked");
      return (
        <div>
          <MobileProductContainer/>
        </div>
      );
    } else {
      console.log("product not clicked");
      return (
        <div>
        <MobileMerchContainer/>
        </div>
      );
    }
  };
  return (
    <div className={classes.root}>
    <div style={{display:'flex', justifyContent:'center'}}>
    <img src="https://i.imgur.com/Uj1Y8Zi.png" style={{maxWidth: '200px', paddingTop: '70px'}}></img>
   </div>
   <React.Fragment>
   {renderView()}
  </React.Fragment>
    </div>
  );
};

export default MobileBody;
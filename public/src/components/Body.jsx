import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MerchContainer from "../containers/MerchContainer";
import ProductContainer from "../containers/ProductContainer";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:'-10px',
    marginTop:'-20px',
    backgroundColor: 'black',
    height: '1330px'
  }
}));

const Body = props => {

  const renderView = () => {
    if (props.productClicked === true) {
      console.log("product clicked");
      return (
        <div>
          <ProductContainer/>
        </div>
      );
    } else {
      console.log("product not clicked");
      // console.log('WIDTH: ', state.width)
      return (
        <div>
        <MerchContainer/>
        </div>
      );
    }
  };
  
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <div style={{display:'flex', justifyContent:'center'}}>
      <img src="https://i.imgur.com/Uj1Y8Zi.png" style={{maxWidth: '400px', marginTop: '50px'}}></img>
     </div>
     <React.Fragment>
      {renderView()}
     </React.Fragment>
    </div>
  );
};

export default Body;
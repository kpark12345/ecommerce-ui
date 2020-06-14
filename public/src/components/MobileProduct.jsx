import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
  }
}));

const MobileProduct = props => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <button onClick={()=> {
      console.log('props', props)
    }}>test</button>
    <p style={{color:'white'}}>PRODUCT PAGE (Mobile)</p>
    </div>
  );
};

export default MobileProduct;
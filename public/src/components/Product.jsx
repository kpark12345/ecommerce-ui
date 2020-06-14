import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "center",
  }
}));

const Product = props => {
  const classes = useStyles();
  return (
    <div className={classes.root} >
    <p style={{color:'white'}}>PRODUCT PAGE</p>
    </div>
  );
};

export default Product;
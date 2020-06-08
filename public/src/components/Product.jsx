import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    
  }
}));

const Product = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <button>test</button>
    </div>
  );
};

export default Product;
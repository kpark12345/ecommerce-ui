import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin:'-10px',
    marginTop:'-20px',
    backgroundColor: 'black',
    height: '900px'
  },
  backgroundPaper: {

  }
}));

const Body = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <div style={{display:'flex', justifyContent:'center'}}>
      <img src="https://i.imgur.com/m6yfwfV.png" style={{maxWidth: '200px', justifyContent: 'center'}}></img>
     </div>
    </div>
  );
};

export default Body;
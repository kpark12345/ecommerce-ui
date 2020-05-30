import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MerchContainer from "../containers/MerchContainer";

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
     <div style={{display:'flex', justifyContent:'center'}}>
      <img src="https://i.imgur.com/Uj1Y8Zi.png" style={{maxWidth: '400px', marginTop: '50px'}}></img>
     </div>
     <React.Fragment>
      <MerchContainer/>
     </React.Fragment>
    </div>
  );
};

export default Body;
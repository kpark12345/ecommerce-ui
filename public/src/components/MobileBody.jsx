import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MobileMerchContainer from "../containers/MobileMerchContainer";

const useStyles = makeStyles(theme => ({
  root: {
    background: 'black',
    height: '1330px',
    margin:'-10px'
  }
}));

const MobileBody = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <div style={{display:'flex', justifyContent:'center'}}>
    <img src="https://i.imgur.com/Uj1Y8Zi.png" style={{maxWidth: '200px', paddingTop: '70px'}}></img>
   </div>
   <React.Fragment>
   <MobileMerchContainer/>
  </React.Fragment>
    </div>
  );
};

export default MobileBody;
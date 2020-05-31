import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "black"
  },
  button: {
    color: "red",
    size: "medium",
    marginLeft: '8px',
    marginRight: '8px',
    fontWeight: 'bold',
    fontSize: '15px'
  },
  menuButton: {
    marginLeft: '15px',
    color:'grey'
  }
}));

const MobileHeader = props => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
    <AppBar style={{background:'black'}} >
    <Tabs  aria-label="simple tabs example">
    <IconButton edge="start" color="inherit" aria-label="menu">
    <MenuIcon className={classes.menuButton}/>
  </IconButton>
        <Tab label="HOME"  style={{color:'red'}}/>
        <Tab label="ABOUT"  style={{color:'red'}}/>
        <Grid
        container
        justify="flex-end"
        alignItems="center"
        style={{}}
      >
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
        <ShoppingCartIcon style={{ color:'red'}}/>
        </Button>
      </Grid>
      </Tabs>   
</AppBar>
    </div>
  );
};

export default MobileHeader;

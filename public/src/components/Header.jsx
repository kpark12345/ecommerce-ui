import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#50C878",
    margin: '-10px'
  },
  button: {
    color: "black",
    size: "medium",
    marginLeft: '8px',
    marginRight: '8px',
    fontWeight: 'bold',
    fontSize: '15px',
    marginBottom: '20px'
  },
}));

const Header = props => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
    >
    <AppBar/>
      <Toolbar>
        <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={() => {}}
          >HOME</Button>
       
          <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >LOOKBOOK</Button>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >FAQS</Button>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >ABOUT</Button>
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
            <ShoppingCartIcon style={{marginBottom: '20px'}}/>
          </Button>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Header;

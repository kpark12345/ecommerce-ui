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
    background: "#AFEEEE"
  },
  button: {
    color: "white",
    size: "medium",
  },
}));

let Header = (props) => {
  const classes = useStyles();
  return (
    <div
      className={classes.root}
      style={{ }}
    >
      <AppBar  style={{ margin: 0 }}/>
      <Toolbar>
        {" "}
        <Typography>@TW1TTERPICASSO</Typography>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{}}
        >
          <Button
            className={classes.button}
            aria-controls="simple-menu"
            aria-haspopup="true"
            style={{color: 'black'}}
            onClick={() => {}}
          >
            <ShoppingCartIcon/>
          </Button>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Header;

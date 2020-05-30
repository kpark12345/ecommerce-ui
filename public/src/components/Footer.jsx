import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#FFCC00",
    margin: "-10px"
  },
  button: {
    color: "black",
    size: "medium",
    marginLeft: "8px",
    marginRight: "8px",
    fontWeight: "bold",
    fontSize: "15px",
    marginBottom: "20px",
  },
  Text: {
    fontFamily:'Roboto'
  }
}));

const Footer = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar/>
      <Toolbar>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          <InstagramIcon />
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          <TwitterIcon />
        </Button>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          <FacebookIcon />
        </Button>
        <Grid
          container
          justify="flex-end"
          alignItems="center"
          style={{}}
        >
        <Typography className={classes.text}>@tw1tterpicasso</Typography>
        </Grid>
      </Toolbar>
    </div>
  );
};

export default Footer;

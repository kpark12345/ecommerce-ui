import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Typography } from "@material-ui/core";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "#50C878",
    margin: "-10px",
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
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{display:'flex', justifyContent: 'center'}}>
        <Typography>YOUR CART</Typography>
      </List>
      <Divider />
      <List>
        <p>Example Product</p>
      </List>
      <Divider />
      <List>
        <p>Payment Methods</p>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar />
      <Toolbar>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {
            props.handleMerchClicked(false)
          }}
        >
          HOME
        </Button>

        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          LOOKBOOK
        </Button>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          FAQS
        </Button>
        <Button
          className={classes.button}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={() => {}}
        >
          ABOUT
        </Button>
        <Grid container justify="flex-end" alignItems="center" style={{}}>
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={toggleDrawer("right", true)}
          >
            <ShoppingCartIcon style={{ marginBottom: "20px" }} />
          </Button>
        </Grid>
      </Toolbar>
      <div>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </div>
    </div>
  );
};

export default Header;

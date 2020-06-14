import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Typography } from "@material-ui/core";

import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "black",
  },
  button: {
    color: "red",
    size: "medium",
    marginLeft: "8px",
    marginRight: "8px",
    fontWeight: "bold",
    fontSize: "15px",
  },
  menuButton: {
    color: "grey",
  },
  tab: {
    color: "red",
    fontWeight: "bold",
    marginLeft: "5px",
    marginRight: "5px",
  },
  checkoutSideBar: {
    width: '300px'
  },
  list: {
    display:'flex',
    justifyContent: 'center', 
  },
  paper: {
    backgroundColor: "#39FF14"
  }
}));

const MobileHeader = (props) => {
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
  const list = (anchor) => {
    if(anchor === 'right') {
      return (
        <div
        className={classes.checkoutSideBar}
        role="mobile-checkout"
      >
        <List className={classes.list}>
        <Typography>YOUR CART</Typography>
      </List>
      <Divider />
      <List>
        <Typography>Example Product</Typography>
      </List>
      <Divider />
      <List>
        <Typography>Payment Methods</Typography>
      </List>
      </div>
      )
    } 
  }
  
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "black" }}>
        <Tabs aria-label="simple tabs example">
          <Tab label="HOME" className={classes.tab} onClick={() => {
            props.handleProductClicked(false)
            console.log(props)
          }}/>
          <Tab label="FAQS" className={classes.tab} />
          <Tab label="ABOUT US" className={classes.tab} />
          <Grid container justify="flex-end" alignItems="center" style={{}}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={toggleDrawer("right", true)}
            >
              <ShoppingCartIcon style={{ color: "red" }} />
            </Button>
          </Grid>
        </Tabs>
      </AppBar>
      <div>
        <Drawer
          classes={{ paper: classes.paper }}
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

export default MobileHeader;

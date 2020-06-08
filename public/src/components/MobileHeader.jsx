import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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
}));

const MobileHeader = (props) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
    left: false,
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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar style={{ background: "black" }}>
        <Tabs aria-label="simple tabs example">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer("left", true)}
            style={{ marginLeft: "10px" }}
          >
            <MenuIcon className={classes.menuButton} />
          </IconButton>
          <Tab label="HOME" className={classes.tab} onClick={() => {
            props.handleMerchClicked(!props.isClicked)
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
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </div>
    </div>
  );
};

export default MobileHeader;

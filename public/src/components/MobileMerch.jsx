import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: "100px",
  },
  merch: {
    maxWidth: "270px",
    outlineStyle: "solid",
    outlineColor: "red",
    outlineWidth: "3px",
  },
}));



//considering either adding a react hook that holds an array of object with the products here or having it saved in redux's store

const MobileMerch = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <Button onClick={() => {
            props.handleProductClicked(!props.productClicked)
            props.handleProductObject({name: 'TEST PRODUCT', img: "https://i.imgur.com/Sk1CGlu.png"})
          }}>
            <img
              src="https://i.imgur.com/Sk1CGlu.png"
              className={classes.merch}
            />
          </Button>
          <Typography
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TESTING
          </Typography>
        </div>

        <div>
          <Button>
            <img
              src="https://i.imgur.com/Sk1CGlu.png"
              className={classes.merch}
            />
          </Button>
          <Typography
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TESTING
          </Typography>
        </div>
      </div>
      <div className={classes.root}>
        <div>
          <Button>
            <img
              src="https://i.imgur.com/Sk1CGlu.png"
              className={classes.merch}
            />
          </Button>
          <Typography
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TESTING
          </Typography>
        </div>
        <div>
          <Button>
            <img
              src="https://i.imgur.com/Sk1CGlu.png"
              className={classes.merch}
            />
          </Button>
          <Typography
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            TESTING
          </Typography>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MobileMerch;

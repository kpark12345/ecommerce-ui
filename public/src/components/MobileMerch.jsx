import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

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

const MobileMerch = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <div>
          <img
            src="https://i.imgur.com/Sk1CGlu.png"
            className={classes.merch}
          />
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
          <img
            src="https://i.imgur.com/Sk1CGlu.png"
            className={classes.merch}
          />
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
          <img
            src="https://i.imgur.com/Sk1CGlu.png"
            className={classes.merch}
          />
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
          <img
            src="https://i.imgur.com/Sk1CGlu.png"
            className={classes.merch}
          />
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

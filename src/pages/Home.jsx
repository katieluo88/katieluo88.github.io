import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import config from "../../config/config.json";

import Markdown from "../components/Markdown";
import intro from "../../config/intro.md";

const useStyles = makeStyles(theme => ({
  portraitGrid: {
    textAlign: "center"
  },
  portrait: {
    width: "300px",
    height: "300px",
    borderRadius: "50%",
    marginTop: "80px"
  },
  introduction: {
    margin: "50px 50px auto 50px",
    [theme.breakpoints.up("md")]: {
      margin: "50px 100px auto auto"
    }
  },
  intro: {
    lineHeight: "190%"
  }
}));

export default function HelloWorld() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      {/* Portrait */}
      <Grid item xs={12} md={4} lg={4} className={classes.portraitGrid}>
        <img className={classes.portrait} src={config.pages.home.portrait} />
      </Grid>
      {/* Introduction */}
      <Grid item xs={12} md={8} lg={8}>
        <div className={classes.introduction}>
          <Markdown>{intro}</Markdown>
        </div>
      </Grid>
    </Grid>
  );
}

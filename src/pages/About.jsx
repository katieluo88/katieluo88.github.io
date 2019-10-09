import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import config from "../../config/config.json";

const useStyles = makeStyles(theme => ({
  pdf: {
    width: "100%",
    height: "100vh"
  }
}));

export default function About() {
  const classes = useStyles();

  return <iframe className={classes.pdf} src={config.pages.about.pdf} />;
}

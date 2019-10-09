import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import config from "../config/config.json";
import Markdown from "../components/Markdown";

const researchContext = require.context("../config/research", false, /\.md$/);
const research = researchContext.keys().reduce((arr, name) => {
  const content = researchContext(name);
  if (name.startsWith("./")) {
    name = name.substr(2);
  }
  name = name.replace(/\.[^/.]+$/, "");
  arr.push({ name, content });
  return arr;
}, []);

const useStyles = makeStyles(theme => ({
  title: {
    width: "100%",
    textAlign: "center",
    margin: "40px auto"
  },
  markdown: {
    ...theme.typography.body2
  },
  imageGrid: {
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "right"
    }
  },
  image: {
    maxWidth: "300px",
    maxHeight: "300px"
  },
  content: {
    margin: "auto 50px",
    [theme.breakpoints.up("md")]: {
      margin: "auto"
    }
  }
}));

export default function Research() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h4" className={classes.title}>
        Research
      </Typography>
      {research.map(r => (
        <Grid container spacing={4}>
          {/* Image */}
          <Grid item xs={12} md={6} lg={6} className={classes.imageGrid}>
          {config.pages.research.hasOwnProperty(r.name) ? (
            <img
              className={classes.image}
              src={config.pages.research[r.name]}
            />
          ) : null}
          </Grid>
          {/* Content */}
          <Grid item xs={12} md={6} lg={6}>
            <div className={classes.content}>
              <Markdown className={classes.markdown}>
                {r.content.default}
              </Markdown>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

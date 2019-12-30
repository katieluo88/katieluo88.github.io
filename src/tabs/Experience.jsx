import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

import config from "../../config/config.json";
import Markdown from "../components/Markdown";

const experienceContext = require.context(
  "../../config/experience",
  true,
  /\.md$/
);
const mds = experienceContext.keys().reduce((dict, name) => {
  const content = experienceContext(name);
  if (name.startsWith("./")) {
    name = name.substr(2);
  }
  dict[name] = content;
  return dict;
}, {});

const experience = config.tabs.Experience;
const render = [];
for (const section in experience) {
  if (experience.hasOwnProperty(section) && !section.startsWith("//")) {
    const sectionTitle = section;
    const sectionContent = [];
    for (const post of experience[section]) {
      const image = post.image;
      const content = mds[post.content];
      sectionContent.push({ image, content });
    }
    render.push({ sectionTitle, sectionContent });
  }
}

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
      textAlign: "center"
    }
  },
  image: {
    maxWidth: "200px",
    maxHeight: "200px"
  },
  content: {
    margin: "auto 50px",
    [theme.breakpoints.up("md")]: {
      margin: "auto"
    }
  }
}));

export default function Experience() {
  const classes = useStyles();

  return (
    <div>
      {render.map(r => (
        <div key={r.sectionTitle}>
          <Typography variant="h4" className={classes.title}>
            {r.sectionTitle}
          </Typography>
          {r.sectionContent.map((c, idx) => (
            <Grid container spacing={4} key={idx}>
              {/* Image */}
              {c.image != null ? (
                <Grid item xs={12} md={4} lg={4} className={classes.imageGrid}>
                  <img className={classes.image} src={c.image} />
                </Grid>
              ) : (
                <Grid
                  item
                  xs={12}
                  md={3}
                  lg={3}
                  className={classes.imageGrid}
                />
              )}
              {/* Content */}
              {c.content != null ? (
                <Grid item xs={12} md={7} lg={7}>
                  <div className={classes.content}>
                    <Markdown className={classes.markdown}>
                      {c.content.default}
                    </Markdown>
                  </div>
                </Grid>
              ) : null}
            </Grid>
          ))}
        </div>
      ))}
    </div>
  );
}

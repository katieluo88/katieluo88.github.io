import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Button, Grid, Toolbar } from "@material-ui/core";

import config from "../config/config.json";
import ActionBar from "./ActionBar";

const useStyles = makeStyles(theme => ({
  title: {
    float: "left",
    width: "288.56px",
    height: "100px"
  },
  grow: {
    flexGrow: 1
  },
  titleGrid: {
    textAlign: "center"
  },
  itemsGrid: {
    margin: "auto",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "right"
    }
  },
  menuItems: {
    fontSize: "20px",
    margin: "auto 4px",
    textTransform: "inherit",
    [theme.breakpoints.up("md")]: {
      fontSize: "24px"
    }
  }
}));

export default function NavBar(props) {
  const classes = useStyles();

  return (
    <AppBar position="relative" color="inherit">
      <Toolbar>
        <Grid container>
          <Grid item xs={12} md={4} lg={4} className={classes.titleGrid}>
            <Button
              color="inherit"
              onClick={() => {
                props.onClick("home");
              }}
            >
              <img className={classes.title} src={config.header.title} />
            </Button>
          </Grid>
          <Grid item xs={12} md={8} lg={8} className={classes.itemsGrid}>
            <ActionBar className={classes.menuItems} onClick={props.onClick} />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

NavBar.propTypes = {
  onClick: PropTypes.func
};

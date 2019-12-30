import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

import Home from "../tabs/Home";
import Experience from "../tabs/Experience";
import About from "../tabs/About";

import config from "../../config/config.json";
import { MainDisplayContext } from "../Contexts";

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden"
  },
  content: {
    paddingBottom: "127px",
    [theme.breakpoints.up("md")]: {
      paddingBottom: "69px"
    }
  }
}));

export default function Main() {
  const [mainDisplay, setMainDisplay] = React.useContext(MainDisplayContext);

  const classes = useStyles();

  const display = (() => {
    switch (mainDisplay) {
      case "Home":
        return <Home />;
      case "Experience":
        return <Experience />;
      case "CV":
        return <About />;
      default:
        return <Home />;
    }
  })();

  return (
    <div className={classes.root}>
      <NavBar onClick={setMainDisplay} />
      <main className={classes.content}>{display}</main>
      <Footer />
    </div>
  );
}

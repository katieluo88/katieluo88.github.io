import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon
} from "@material-ui/icons";

import { ThemeContext } from "../Contexts";
import config from "../config/config.json";

export default function ActionBar(props) {
  const [theme, toggleTheme] = React.useContext(ThemeContext);

  const pages = [];

  for (const page in config.pages) {
    if (typeof config.pages[page] === "object") {
      pages.push(
        <Button
          className={props.className}
          onClick={() => {
            props.onClick(page);
          }}
        >
          {page.charAt(0).toUpperCase() + page.slice(1)}
        </Button>
      );
    }
  }

  return (
    <React.Fragment>
      {pages}
      <Button className={props.className} onClick={toggleTheme}>
        {theme.palette.type === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </Button>
    </React.Fragment>
  );
}

ActionBar.propTypes = {
  onClick: PropTypes.func,
  className: PropTypes.string
};

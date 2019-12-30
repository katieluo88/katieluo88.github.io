import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button } from "@material-ui/core";

import {
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon
} from "@material-ui/icons";

import { ThemeContext } from "../Contexts";
import config from "../../config/config.json";

export default function ActionBar(props) {
  const [theme, toggleTheme] = React.useContext(ThemeContext);

  const tabs = [];

  for (const tab in config.tabs) {
    if (typeof config.tabs[tab] === "object") {
      tabs.push(
        <Button
          key={tab}
          className={props.className}
          onClick={() => {
            props.onClick(tab);
          }}
        >
          {tab}
        </Button>
      );
    }
  }

  return (
    <React.Fragment>
      {tabs}
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

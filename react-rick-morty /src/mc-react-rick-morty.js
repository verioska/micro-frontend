import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import HomeCharacters from "./page/homeCharacters/HomeCharacters";
import '../../react-single/src/Styles.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: HomeCharacters,
});

export const { bootstrap, mount, unmount } = lifecycles;

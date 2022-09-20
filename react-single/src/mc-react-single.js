import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Routes from "./page/routes/Routes";
import './Styles.css';

const lifecycles = singleSpaReact(
 {
  React,
  ReactDOM,
  rootComponent: Routes,
});

export const { bootstrap, mount, unmount } = lifecycles;

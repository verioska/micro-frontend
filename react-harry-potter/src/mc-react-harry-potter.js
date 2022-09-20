import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import HomePeople from "./page/home-people/HomePeople";
import '../../react-single/src/Styles.css'

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: HomePeople,
});

export const { bootstrap, mount, unmount } = lifecycles;

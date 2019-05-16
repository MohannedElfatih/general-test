import "../Config";
import DebugConfig from "../Config/DebugConfig";
import React, { Component } from "react";
import { Provider } from "react-redux";
import RootContainer from "./RootContainer";
import EStyleSheet from "react-native-extended-stylesheet";

EStyleSheet.build({});

class App extends Component {
  render() {
    return <RootContainer />;
  }
}

// allow reactotron overlay for fast design in dev mode
export default (DebugConfig.useReactotron ? console.tron.overlay(App) : App);

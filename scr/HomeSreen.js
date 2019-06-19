import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ViewFile from "./SubSreens/View";
import UploadFile from "./SubSreens/Upload";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

export default class HomeSreen extends Component {
  render() {
    return <DashboardTabNavigator />;
  }
}

const DashboardTabNavigator = createBottomTabNavigator({
  ViewFile: ViewFile,
  UploadFile: UploadFile
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

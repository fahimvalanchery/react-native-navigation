import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import HomeSreen from "./scr/HomeSreen";

import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import SettingsScreen from "./scr/SettingsScreen";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}
/*
const AppStackNavigator = createStackNavigator(
  {
    Home: HomeSreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#455a64"
      }
    }
  }
);*/
const AppStackNavigator = createDrawerNavigator(
  {
    Setting: SettingsScreen,
    Home: HomeSreen
  },
  {
    unmountInactiveRoutes:true
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#455a64"
      }
    }
  }
);

const AppContainer = createAppContainer(AppStackNavigator);

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

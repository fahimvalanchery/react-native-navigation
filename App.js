import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import ViewFile from "./scr/SubSreens/View";
import UploadFile from "./scr/SubSreens/Upload";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <AppContainer />;
  }
}

const HomeSreenTabNavigator = createBottomTabNavigator(
  {
    "View Files": ViewFile,
    "Upload Files": UploadFile
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      labelStyle: {
        fontSize: 18
      },
      activeBackgroundColor: "#00695c"
    }
  }
);

const HomeStackNavigator = createStackNavigator(
  {
    HomeSreenTabNavigator: HomeSreenTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            name="md-menu"
            style={{ paddingLeft: 10 }}
            size={30}
            onPress={() => navigation.openDrawer()}
          />
        )
      };
    }
  }
);

const AppStackNavigator = createDrawerNavigator(
  {
    Home: HomeStackNavigator
  },
  {
    unmountInactiveRoutes: true,
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

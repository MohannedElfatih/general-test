import { createStackNavigator, createAppContainer } from "react-navigation";
import LaunchScreen from "../Containers/LaunchScreen";

import styles from "./Styles/NavigationStyles";
import HomeScreen from "../Containers/HomeScreen";
import { Colors } from "../Themes";
import DetailsScreen from "../Containers/DetailsScreen";

// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    LaunchScreen: { screen: LaunchScreen },
    HomeScreen: { screen: HomeScreen },
    DetailsScreen: { screen: DetailsScreen }
  },
  {
    // Default config for all screens
    headerMode: "none",
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerStyle: styles.header
    }
  }
);

export default createAppContainer(PrimaryNav);

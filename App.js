import React from 'react';
import { StyleSheet } from 'react-native';

/*
*1. React Navigation 3.0 has a number of breaking changes including an explicit app
*   container required for the root navigator
*2. In the past, any navigator could act as the navigation container at the
*   top-level of your app because they were all wrapped in “navigation containers”.
*3.
* */
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

/*Import screens*/
import Login from './src/screens/Login/Login'
import UserDashboard from './src/screens/UserDashboard/UserDashboard'
import PHIDashboard from './src/screens/PHIDashboard/PHIDashboard'
import UserMap from './src/screens/UserMap/UserMap'
import PHIMap from './src/screens/PHIMap/PHIMap'
import SignUp from './src/screens/SignUp/SignUp'

const RootStack = createStackNavigator({
  Login: Login,
  UserDashboard:UserDashboard,
  PHIDashboard: PHIDashboard,
  UserMap: UserMap,
  PHIMap: PHIMap,
  SignUp: SignUp

});

/*
* The navigation container, now known as an app container, is a higher-order-component that maintains the navigation state
* of your app and handles interacting with the outside world to turn linking events into navigation actions and so on
* */
const App = createAppContainer(RootStack);

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

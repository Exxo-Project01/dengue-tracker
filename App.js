import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
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

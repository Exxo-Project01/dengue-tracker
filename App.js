import React from 'react';
import {ActivityIndicator,StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Input} from './src/components/Login/input';
import {Button} from './src/components/Login/Button';
import { LoginPage } from './src/components/Login/LoginPage';
import { Home } from './src/components/HomePage/Home';
import {  createStackNavigator } from 'react-navigation';
console.reportErrorsAsExceptions = false;

export default class App extends React.Component {

  
  static navigationOptions =
    {
       title: 'Dengue Tracker',
    };
  
    
    render() {
        return (
            <View  style={styles.form}>
           <Button  style={styles.container} onPress={() => this.props.navigation.navigate('LoginPage')}>PHI</Button>
           <Button  style={styles.container}>User</Button>
        </View>
       
         
        );
      }
     

}
// export default Project =  createStackNavigator(
//     {
//      First: { screen: Home },
     
//      Second: { screen: LoginPage }
//     });
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },
    form: {
      flex: 1,
      justifyContent: 'center'
    },
    header:{
        flex:1
    }
  });
import React from 'react';
import {ActivityIndicator,StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Button} from '../Login/Button';
import {LoginPage} from '../Login/LoginPage';
import {  createStackNavigator } from 'react-navigation';
console.reportErrorsAsExceptions = false;

export class Home extends React.Component {
  
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
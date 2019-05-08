import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import {Input} from './components/Login/input';
import {Button} from './components/Login/Button';
export default class App extends React.Component {

  state={
    email:'',
    password:'',
  }
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyCDdzV2mcgvArvcm33-XkBWHO6a4XxIyDE',
      authDomain: 'mobiapp-2853d.firebaseapp.com',
    }
  }
  render() {
    return (
      <View style={styles.container}>
       <Input
       placeholder='enter your email..'
       label='Email'
       onChangeText={email => this.setState({email})}
       value={this.state.email}
       />
        <Input
       placeholder='enter your password..'
       label='Password'
       secureTextEntry
       onChangeText={password => this.setState({password})}
       value={this.state.password}
       />
       <Button>Login</Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,

   
  },
});

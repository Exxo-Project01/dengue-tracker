import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from "./src/component/Map/Map";
import * as firebase from 'firebase';

export default class App extends React.Component {
  componentWillMount(){
    const firebaseConfig = {
      apiKey: 'AIzaSyCDdzV2mcgvArvcm33-XkBWHO6a4XxIyDE',
      authDomain: 'mobiapp-2853d.firebaseapp.com',
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Map/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

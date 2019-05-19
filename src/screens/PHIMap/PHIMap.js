import React from 'react'
import {View, Text, Button} from 'react-native'

export default class phiMap extends React.Component{

    static navigationOptions = {
        title: "PHI Dengue Map",
        headerStyle: {
            backgroundColor: "#03A9F4"
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        }
    };

    render(){
        return (
            <View>
                <Text>PHI Map</Text>

            </View>
        )
    }
}

import React from 'react'
import {View, Text, Button} from 'react-native'

export default class userMap extends React.Component{

    static navigationOptions = {
        title: "Dengue Breeding Places",
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
                <Text>User Map</Text>

            </View>
        )
    }
}

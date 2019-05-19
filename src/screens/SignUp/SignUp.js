import React from 'react'
import {View, Text} from 'react-native'
import Button from '../../components/Buttons/Button'

export default class signUp extends React.Component{

    static navigationOptions = {
        title: "Sign Up",
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
                <Text>Sign Up Form</Text>
            </View>
        )
    }
}

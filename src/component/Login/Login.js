import React from 'react'
import { View,TextInput Text, StyleSheet, TouchableOpacity } from 'react-native'

class Login extends React.Component{
    render() {
        return (
            <View>
                <TextInput placseHolder={"eneter name"}/>
                <TextInput/>

            </View>
        )
    }
}

export default Login

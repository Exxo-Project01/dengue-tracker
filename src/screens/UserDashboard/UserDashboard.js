import React from 'react'
import {View, Text} from 'react-native'
import Button from '../../components/Buttons/Button'

export default class userDashboard extends React.Component{

    static navigationOptions = {
        title: "Dashboard",
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
                <Text>User Functions</Text>
                <Button onPress={()=>this.props.navigation.navigate('UserMap')}>Map</Button>
                <Button onPress={()=>this.props.navigation.navigate('UserMap')}>PHI</Button>
                <Button onPress={()=>this.props.navigation.navigate('UserMap')}>Garbage Collectors</Button>

            </View>
        )
    }
}

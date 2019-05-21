import React from 'react'
import {View, Text, Button} from 'react-native'
// import MapView from 'react-native-maps'

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
                {/*<MapView*/}
                    {/*region={*/}
                    {/*{*/}
                        {/*latitude:59.3293,*/}
                        {/*longitude: 18.0685,*/}
                        {/*latitudeDelta: 0.1,*/}
                        {/*longitudeDelta: 0.1*/}
                    {/*}*/}
                {/*}*/}
                {/*>*/}
                {/*</MapView>*/}
            </View>
        )
    }
}

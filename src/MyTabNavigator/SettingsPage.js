import React from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';


export default class SettingsPage extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Settings Page</Text>
                <Button title="Go to Details" onPress={() => {
                    this.props.navigation.navigate("Details");
                }}></Button>
            </View>
        );
    }

}

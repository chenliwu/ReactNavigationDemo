import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    createStackNavigator
} from "react-navigation";

/**
 * 自定义StackNavigator练习
 */

export default class HomePage extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Page</Text>
                <Button title="Go to Details" onPress={() => {
                    this.props.navigation.navigate("Details");
                }}></Button>
            </View>
        );
    }
}



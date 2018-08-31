import React from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Platform
} from 'react-native';

import {
    createStackNavigator
} from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

class Screen1 extends React.Component {

    render() {

        const isAndroid = Platform.OS === "android";

        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={{ color: '#fff', }}>Screen1  Light Screen</Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen2')}
                    color={isAndroid ? "blue" : "#fff"}
                />
            </SafeAreaView>
        );
    }

}


class Screen2 extends React.Component {

    render() {
        return (
            <SafeAreaView style={[styles.container, { backgroundColor: '#ecf0f1' }]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#ecf0f1"
                />
                <Text style={styles.paragraph}>Dark Screen</Text>
                <Button
                    title="Next screen"
                    onPress={() => this.props.navigation.navigate('Screen1')}
                />
            </SafeAreaView>
        );
    }

}

const MyStackNavigator = createStackNavigator(
    {
        Screen1: {
            screen: Screen1,
        },
        Screen2: {
            screen: Screen2,
        },
    },
    {
        initialRouteName:'Screen1',
        headerMode: 'none',
    }
);

export default class App extends React.Component{
    render(){
        return (
            <MyStackNavigator></MyStackNavigator>
        );
    }
}



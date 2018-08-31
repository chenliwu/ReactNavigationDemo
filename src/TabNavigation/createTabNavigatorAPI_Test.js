import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createBottomTabNavigator
} from 'react-navigation';
/**
 
createBottomTabNavigator
屏幕底部的一个简单的选项卡栏, 可以在不同的路由之间切换。路由被懒加载--他们的屏幕组件在第一次聚焦之前不会载入。

createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);


 */
class HomeScreen extends React.Component {
    render() {

        const { navigation } = this.props;
        const param = navigation.getParam("param");

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home!</Text>
                <Text>{param}</Text>
                <Button title="Go to Settings" onPress={() => {
                    this.props.navigation.navigate("Settings", {
                        param: "parameter from home"
                    })
                }}>

                </Button>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        const { navigation } = this.props;
        const param = navigation.getParam("param");

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
                <Text>{param}</Text>
                <Button title="Go to Home" onPress={() => {
                    this.props.navigation.navigate("Home", {
                        param: 'parameter from Settings'
                    })
                }}>

                </Button>
            </View>
        );
    }
}

export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',  //label和icon的背景色，活跃状态下
            inactiveTintColor: 'gray',  //label和icon的背景色，不活跃状态下
        },
    }
);
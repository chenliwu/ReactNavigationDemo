import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation';

/**
 * 只能从其中一个屏幕组件修改导航器的导航选项。
 */

class HomeScreen extends React.Component {

    /**
     * 每个页面组件可以有一个名为navigationOptions的静态属性，它是一个对象或一个返回包含各种配置选项的对象的函数。
    */
    static navigationOptions = {
        tabBarLabel: "Home",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Home Screen</Text>
            </View>
        );
    }

}


class SettingsScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Settings",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings Screen</Text>
            </View>
        );
    }

}

/**
    注意：navigationOptions属性 Vs 配置
    导航器使用create*Navigator(routeConfig, navigatorConfig)进行初始化。 
    在navigatorConfig内部，我们可以添加一个navigationOptions属性。
 */
const HomeStack = createStackNavigator(
    {
        HomeScreen
    },
    {
        navigationOptions: {
            title: "Welcome",
        }
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: "Home!",
};

let SettingsStack = createStackNavigator({
    SettingsScreen
});

export default createBottomTabNavigator({
    HomeScreen,
    SettingsScreen,
});




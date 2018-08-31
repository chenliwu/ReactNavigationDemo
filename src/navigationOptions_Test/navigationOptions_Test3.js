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


class HomeScreen extends React.Component {

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

class FeedScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Feed",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Feed Screen</Text>
            </View>
        );
    }

}

class ProfileScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Profile",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile Screen</Text>
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


const TabNavigator = createBottomTabNavigator(
    {
        Feed: FeedScreen,
        Profile: ProfileScreen,
    },
    {
        initialRouteName: "Feed",
    }
);

/**
 * Test：堆栈包含一个选项卡导航器，并且您想要在堆栈标题栏上设置标题
 */

/**
 * 如果我们在FeedScreen上用navigationOptions设置headerTitle，那么这是行不通的。 
 * 这是因为AppNavigator堆栈只会查看其直接子级进行配置：TabNavigator和SettingsScreen。 
 * 因此，我们可以通过在TabNavigator上设置headerTitle来代替
 * 
 * 另一种选择是重新组织导航器，以便每个选项卡都有自己的堆叠。 当标签屏幕聚焦时，您可以隐藏顶层堆栈的标题。
 * 
 * @param {*} param0 
 */
TabNavigator.navigationOptions = ({ navigation }) => {
    let { routeName } = navigation.state.routes[navigation.state.index];

    // You can do whatever you like here to pick the title based on the route name
    let headerTitle = routeName;

    return {
        headerTitle,
    };
};

const AppNavigator = createStackNavigator(
    {
        Home: TabNavigator,
        Settings:SettingsScreen,
    },
    {
        initialRouteName: "Home",
        navigationOptions: {
            title: "AppNavigator"
        },
        headerLayoutPreset:'center',
    }
);

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator></AppNavigator>
        );
    }
}




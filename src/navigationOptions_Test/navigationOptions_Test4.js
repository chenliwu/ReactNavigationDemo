import React from 'react';
import {
    View,
    Text,
    Button,
    AsyncStorage,
    StatusBar,
    StyleSheet,
    ActivityIndicator,
} from 'react-native';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
/**
 * Tab navigator 包含 stack navigator，你希望隐藏特定页面上的 tabbar
 */

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class HomeScreen extends React.Component {

    static navigationOptions = {
        title: 'Welcome to the app!',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="Show me more of the app" onPress={this._showMoreApp} />
                <Button title="注销" onPress={this._signOutAsync} />
            </View>
        );
    }

    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    /**
     * 异步跳转到Auth页面
     */
    _signOutAsync = async () => {
        await AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    };

}

class DetailsScreen extends React.Component {

    static navigationOptions = {
        tabBarLabel: "Details",
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Details Screen</Text>
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


/**
 * 其他页面
 */
class OtherScreen extends React.Component {

    static navigationOptions = {
        title: 'Lots of features here',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="注销" onPress={this._signOutAsync} />
                <StatusBar barStyle="default" />
            </View>
        );
    }

    _signOutAsync = async () => {
        await AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    };
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
 * 验证加载页面
 */
class AuthScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    _bootstrapAsync = async () => {
        //读取userToken
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'Home' : 'Auth');
    };

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}


/**
 * 注册页面
 */
class SignInScreen extends React.Component {
    static navigationOptions = {
        title: 'Please sign in',
    };

    render() {
        return (
            <View style={styles.container}>
                <Button title="注册" onPress={this._signInAsync} />
            </View>
        );
    }

    _signInAsync = async () => {
        /**
         * await用于等待异步完成
         * await只能在async函数中使用。
         * 通常async、await都是跟随Promise一起使用的
         */
        /**
         * AsyncStorage是一个简单的、异步的、持久化的Key-Value存储系统，它对于App来说是全局性的。
         */
        //存储userToken到AsyncStorage里面,userToken标识用户是否已注册
        await AsyncStorage.setItem('userToken', 'chenliwu');
        /**
         * 转到App屏幕
         */
        this.props.navigation.navigate('Home');
    };
}

const AuthStack = createStackNavigator({
    SignIn: SignInScreen
});

const FeedStack = createStackNavigator({
    FeedHome: FeedScreen,
    Details: DetailsScreen,
});

const TabNavigator = createBottomTabNavigator({
    Feed: FeedStack,
    Profile: ProfileScreen,
});

const AppNavigator = createSwitchNavigator({
    Auth: AuthStack,
    Home: TabNavigator,
});



export default class App extends React.Component {
    render() {
        return (
            <AppNavigator></AppNavigator>
        );
    }
}




import React from 'react';
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
} from 'react-native';
import { StackNavigator, SwitchNavigator } from 'react-navigation';
// Version can be specified in package.json

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
        this.props.navigation.navigate('App');
    };
}

/**
 * 主页
 */
class HomeScreen extends React.Component {

    /**
     * 设置HomeScreen的默认navigationOptions
     */
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

    /**
     * 跳转到Other页面
     */
    _showMoreApp = () => {
        this.props.navigation.navigate('Other');
    };

    /**
     * 异步跳转到Auth页面
     */
    _signOutAsync = async () => {
        //await AsyncStorage.clear();
        await AsyncStorage.removeItem("userToken");
        this.props.navigation.navigate('Auth');
    };
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
        /**
         * AsyncStorage.clear();
         * static clear(callback?: ?(error: ?Error) => void) 
         * 删除全部的AsyncStorage数据，返回一个Promise对象。
         */
        //await AsyncStorage.clear();
        await AsyncStorage.removeItem("userToken");
        //“注销”后返回注册页面，并移除AsyncStorage的注册标识
        this.props.navigation.navigate('Auth');
    };
}

/**
 * 验证加载页面
 */
class AuthLoadingScreen extends React.Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    // Fetch the token from storage then navigate to our appropriate place
    /**
     * 从存储中获取令牌，然后导航到我们适当的位置
     */
    _bootstrapAsync = async () => {
        //读取userToken
        const userToken = await AsyncStorage.getItem('userToken');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        /**
         * 这将切换到App屏幕或Auth屏幕并进行此加载
         * 屏幕将被卸下并扔掉。
         */
        this.props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    /**
     * 渲染您喜欢的任何加载内容
     */
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const AppStack = StackNavigator({
    Home: HomeScreen,
    Other: OtherScreen
});
const AuthStack = StackNavigator({
    SignIn: SignInScreen
});

/**
 * 页面切换器
 */
export default SwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);

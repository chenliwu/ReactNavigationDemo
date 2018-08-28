import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {createStackNavigator} from 'react-navigation';

//import DetailsScreen from './DetailsScreen';

/**
 *
 创建一个 stack navigator
 摘要

 （1）React Native没有像Web浏览器那样的内置API用于导航。 React Navigation为您提供此功能，以及在iOS和Android上进行页面切换手势和动画。

 （2）createStackNavigator是一个函数，它接受一个路由配置对象和一个可选对象并返回一个 React 组件。

 （3）路由配置对象中的key是路由名称，value是该路由的配置。 配置中唯一必须的属性是screen（用于路由的组件）。

 （4）如果要指定堆栈中的初始路由，请在堆栈选项对象上设置initialRouteName。

 */


class HomeScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

/**
 * this.props.navigation.push('Details')  这使我们能够表达在不考虑现有导航历史的情况下添加其他路由的意图。

 每次调用 ` push ` 时, 我们会向导航堆栈中添加新路由。
 当你调用 ` navigate ` 时, 它首先尝试查找具有该名称的现有路由, 并且只有在堆栈上没有一个新路由时才会推送该路由。

 ## 返回

 如果当前页面可以执行返回操作，则 stack navigator 会自动提供一个包含返回按钮的标题栏
 （如果导航堆栈中只有一个页面，则没有任何可返回的内容，因此也不存在返回键）。

 有时候你希望能够以编程的方式触发此行为，可以使用` this.props.navigation.goBack() `。

 */
class DetailsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.push('Details')}
                />
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Button
                    title="Go back"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}


/**
 *
 createStackNavigator是一个返回 React 组件的方法。

 现在我们的堆栈有两个路由，一个Home和一个Details。
 Home路由对应HomeScreen组件，Details路由对应DetailsScreen组件。
 堆栈的初始路由是Home路由。

 */
const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,     //screen：对应界面名称，需要填入import之后的页面
            navigationOptions:{     //navigationOptions 配置StackNavigator的一些属性

                //title:'标题',               //标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用
                headerTitle:'导航栏标题',     //设置导航栏标题，推荐
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions:{
                headerTitle:'导航栏标题',    //设置导航栏标题，推荐
                headerBackTitle:'',         //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                gesturesEnabled:true,       //是否支持滑动返回手势，iOS默认支持，安卓默认关闭
                headerTintColor:'red'            //设置导航栏颜色
            }
        }
    },
    {
        initialRouteName: 'Home',
    }
);

export default class StackNavigatorBasics extends React.Component {
    render() {
        return <RootStack/>;
    }
}


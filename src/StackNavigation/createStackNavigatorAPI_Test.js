import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


/**
createStackNavigator

API定义：createStackNavigator(RouteConfigs, StackNavigatorConfig);

为你的应用程序提供一种在每个新屏幕放置在堆栈顶部的屏幕之间转换的方法。

默认情况下，stack navigator 被配置为具有熟悉的iOS和Android外观 & 感觉：
新屏幕从iOS右侧滑入，从Android底部淡入。 
在iOS上，stack navigator 也可以配置为屏幕从底部滑入的模式样式。

 *
 */
class HomeScreen extends Component {

    static navigationOptions = {
        title: 'Home',
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate("Details", {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    }
                    )}
                />
            </View>
        );
    }
}

class DetailsScreen extends Component {

    //使用otherParam作为屏幕的标题，通过按钮点击事件setParams动态改变标题内容
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('otherParam', 'A Nested Details Screen'),
        };
    };

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
                <Button
                    title="Update the title"
                    onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
                />
            </View>
        );
    }
}

/**

 调整标题样式
 定制标题样式时有三个关键属性：headerStyle、headerTintColor和headerTitleStyle。

 （1）headerStyle：将应用于包装标题的View的样式对象。 如果你在其上设置backgroundColor，那将是你标题栏的颜色。
 （2）headerTintColor：返回按钮和标题都使用这个属性作为它们的颜色。 在下面的例子中，我们将 tint color 设置为白色（#fff），所以返回按钮和标题栏标题将变为白色。
 （3）headerTitleStyle：如果我们想为标题定制fontFamily，fontWeight和其他Text样式属性，我们可以用它来完成。

 */

const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home',
        /*
        The header config from HomeScreen is now here
        跨页面共享通用的navigationOptions
        */
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
            gesturesEnabled:true,    //是否允许使用手势来关闭页面，在 iOS 上默认为true，在 Android 上默认为false。
        },
        headerMode:'float', //(float,screen,none)指定页眉的呈现方式:IOS默认float；Android默认screen
        headerBackTitleVisible:false,   //提供合理的默认值以确定后退按钮标题是否可见，默认false
        headerTransitionPreset:'fade-in-place', //指定页眉应如何从一个屏幕过渡到另一屏时的动画。

        headerLayoutPreset:'center',   //指定Header组件如何布局（left,center），没有right。IOS默认center，Android默认left

    }
);

export default class StackNavigatorBasics extends React.Component {
    render() {
        return <RootStack />;
    }
}


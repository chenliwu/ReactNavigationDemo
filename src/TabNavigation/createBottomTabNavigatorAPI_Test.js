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
                <Button title="显示主页Tab" onPress={()=>{
                    
                }}></Button>

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


class PersonalScreen extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Personal!</Text>
            </View>
        );
    }

}

/**
 * createBottomTabNavigator(RouteConfigs, BottomTabNavigatorConfig);
    (1)RouteConfigs
路由配置对象是从路由名称到路由配置的映射，它告诉导航器该路由要呈现的内容，请参阅示例 stack navigator。
    (2)BottomTabNavigatorConfig
 */
export default createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                //title:"主页",       //可用作headerTitle和tabBarLabel的后备的通用标题。
                tabBarVisible: true, //true或false用于显示或隐藏标签栏，如果未设置，则默认为true。
                tabBarLabel: "主页", //标签栏或 React 元素中显示的选项卡的标题字符串
            }
        },
        Settings: {
            screen: SettingsScreen,
            navigationOptions: {
                tabBarVisible: true,
                tabBarLabel: "设置",
            },
        },
        Personal:{
            screen:PersonalScreen,
            navigationOptions:{
                tabBarLabel:"我的",
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',  //label和icon的背景色，活跃状态下
            inactiveTintColor: 'gray',  //label和icon的背景色，不活跃状态下
            //activeBackgroundColor:'blue',   //活动选项卡的背景色。
            //inactiveBackgroundColor:'red',  //非活动选项卡的背景色。
            labelStyle: {    //选项卡标签的样式对象。
                fontSize: 16,
            },
            tabStyle: {  //选项卡的样式对象。

            },
            style: {    //选项卡栏的样式对象。
                //backgroundColor: 'blue',
            },
        },
    }
);
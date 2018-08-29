import React from 'react';
import {Text, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createBottomTabNavigator
} from 'react-navigation';


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Home!</Text>
            </View>
        );
    }
}

class SettingsScreen extends React.Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Settings!</Text>
            </View>
        );
    }
}


/**

 自定义外观
 这与如何自定义 stack navigator 类似 — 有些属性可以在初始化 tab navigator 时设置，有些可以在每个页面的navigationOptions中自定义。

 （1）tabBarIcon是navigationOptions上的一个属性，所以我们知道我们可以在我们的页面上使用它，
 但在这种情况下，选择将它放在createBottomTabNavigator的配置中，是为了方便集中配置图标。
 （2）tabBarIcon是一个赋予了focused 这个 state 和tintColor的函数。 如果你在配置中进一步查看，您将看到tabBarOptions、activeTintColor和inactiveTintColor。 这些默认为 iOS 平台的默认值，但您可以在这里更改它们。 传递给tabBarIcon的tintColor取决于focused这个 state （判断该 Tab 是否获得了焦点），可以是活动，也可以是非活动状态

 */
export default createBottomTabNavigator(
    {
        Home: HomeScreen,
        Settings: SettingsScreen,
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-information-circle${focused ? '' : '-outline'}`;
                } else if (routeName === 'Settings') {
                    iconName = `ios-options${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);
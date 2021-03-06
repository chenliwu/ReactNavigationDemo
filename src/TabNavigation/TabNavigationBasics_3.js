import React from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

/**
 * 
 * 每个 Tab 的 stack navigator
通常， tabs 不仅仅显示一个页面 — 例如，在你的 Twitter 上，您可以点击一条 tweet，它将会把你带到某个 Tab 的一个新页面，
该页面包含关于这条 tweet 的所有回复。 
你可以将此视为在每个选项卡中存在单独的导航堆栈，这正是我们在 React Navigation 中对其进行建模的方式。
 */

class DetailsScreen extends React.Component{
    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Details</Text>
                <Button title="Go to Settings" onPress={()=>{
                    this.props.navigation.navigate("Settings",{
                        param:"param from Details"
                    });
                }}></Button>
            </View>
        );
    }
}


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


const HomeStack = createStackNavigator({
    Home:HomeScreen,
    Details:DetailsScreen,
});

const SettingsStack = createStackNavigator({
    Settings:SettingsScreen,
    Details:DetailsScreen
});


export default createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
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
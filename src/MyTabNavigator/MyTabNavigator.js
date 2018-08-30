import React from 'react';
import {
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

import SettingsPage from './SettingsPage';

const HomeStack = createStackNavigator(
    {
        Home: {
            screen:HomePage,
            navigationOptions:{
                headerTitle:"Home",
                gesturesEnabled:true
            },
        },
        Details:{
            screen:DetailsPage,
            navigationOptions:{
                headerTitle:"Details",
                gesturesEnabled:true
            },
        }
    },
    {
        initialRouteName:"Home",
    }
);

const SettingsStack = createStackNavigator(
    {
        Settings: {
            screen:SettingsPage,
            navigationOptions:{
                headerTitle:"Settings",
                gesturesEnabled:true
            },
        },
        Details:{
            screen:DetailsPage,
            headerTitle:"Details",
            gesturesEnabled:true
        }
    },
    {
        initialRouteName:"Settings",
    }
);


const MyBottomTabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
        tabBarOptions: {
            activeTintColor: 'tomato',  //label和icon的背景色，活跃状态下
            inactiveTintColor: 'gray',  //label和icon的背景色，不活跃状态下
        },
    }

);

export default class MyTabNavigator extends React.Component {
    render() {
        return (
            <MyBottomTabNavigator></MyBottomTabNavigator>
        );
    }
}









import React from 'react';
import {
    createStackNavigator
} from 'react-navigation';

import HomePage from './HomePage';
import DetailsPage from './DetailsPage';

/**
 * 自定义StackNavigator练习
 * 
 * 页面代码写在不同的JS文件
 * 
 */

/**
 * createStackNavigator是一个返回 React 组件的方法。
 * 
 */
const MyStackNavigator = createStackNavigator(
    {
        Home: HomePage,
        Details: DetailsPage,
    },
    {
        initialRouteName: "Home",  //设置堆栈的默认屏幕。
    }
);

//导出主页类；
//createStackNavigator是一个返回 React 组件的方法，它返回的是组件，不是一个类，因此需要在再封装一次再返回给页面使用。
export default class PageStackNavigator extends React.Component {
    render() {
        return (
            <MyStackNavigator></MyStackNavigator>
        );
    }
}


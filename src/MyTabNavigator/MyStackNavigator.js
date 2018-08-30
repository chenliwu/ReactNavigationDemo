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
        Home: {
            screen:HomePage,        //指定屏幕的组件。
            navigationOptions:{     //配置StackNavigator的一些属性。
                headerTitle:'Home', //设置导航栏标题
                
            }
        },
        Details: {
            screen:DetailsPage,
            navigationOptions:{
                headerTitle:'Details',
                gesturesEnabled:true,   //是否支持滑动返回手势，iOS默认支持，安卓默认关闭
            }
        }

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


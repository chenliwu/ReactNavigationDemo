import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {createStackNavigator} from 'react-navigation';


/**
 传递参数给路由

 两个知识点，了解一下：

 （1）需要将参数包装成一个对象，作为navigation.navigate方法的第二个参数传递给路由。如：this.props.navigation.navigate('RouteName', {  参数列表 })

 （2）读取页面组件中的参数的方法：this.props.navigation.state.params。
 */

/**
 *
 传递参数给路由  摘要

 （1）navigate接受可选的第二个参数，以便将参数传递给要导航到的路由。 例如：this.props.navigation.navigate('RouteName', {paramName: 'value'})。
 （2）我们可以使用this.props.navigation.getParam读取参数
 （3）作为getParam的替代方法，可以使用this.props.navigation.state.params。 如果未指定参数，则为null。

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
                    onPress={() =>  this.props.navigation.navigate("Details", {
                            itemId: 86,
                            otherParam: 'anything you want here',
                        }
                    )}
                />
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        const {navigation} = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');

        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Details Screen</Text>
                <Text>itemId: {JSON.stringify(itemId)}</Text>
                <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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


const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,     //screen：对应界面名称，需要填入import之后的页面
            navigationOptions: {     //navigationOptions 配置StackNavigator的一些属性

                //title:'标题',               //标题，如果设置了这个导航栏和标签栏的title就会变成一样的，不推荐使用
                headerTitle: '导航栏标题',     //设置导航栏标题，推荐
            }
        },
        Details: {
            screen: DetailsScreen,
            navigationOptions: {
                headerTitle: '导航栏标题',    //设置导航栏标题，推荐
                headerBackTitle: '',         //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题。可以自定义，也可以设置为null
                gesturesEnabled: true,       //是否支持滑动返回手势，iOS默认支持，安卓默认关闭
                headerTintColor: 'red'            //设置导航栏颜色
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


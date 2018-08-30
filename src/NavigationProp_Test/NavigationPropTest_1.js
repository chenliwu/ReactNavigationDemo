import React from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

import {
    createStackNavigator
} from 'react-navigation';

/**
 * 2018-08-30
 * https://reactnavigation.org/docs/zh-Hans/navigation-prop.html
 * 
 * Navigation prop  API练习
 * this.props.navigation
 * （1）navigate -转到另一个屏幕, 计算出需要执行的操作
 * （2）goBack -关闭活动屏幕并在堆栈中向后移动
 * （3）addListener -订阅导航生命周期的更新
 * （4）isFocused -函数返回 true 如果屏幕焦点和 false 否则。
 * （5）state -当前状态/路由
 * （6）setParams -对路由的参数进行更改
 * （7）getParam -获取具有回退的特定参数
 * （8）dispatch - 向路由发送 action
 * 
 * navigation prop 不传递给所有组件; 只有screen组件会自动收到此 prop！ 
 * React Navigation在这里没有做神奇的操作。 
 * 例如，如果要定义MyBackButton组件并将其呈现为屏幕组件的子组件，则无法访问其上的navigation prop。
 * 
 */

/**
 * 仅当当前 navigator 是 stack navigator 时，this.props.navigation上有一些附加功能。 
 * 这些函数是 navigate 和 goBack 的替代方法, 你可以使用任何你喜欢的方法。 这些功能是：
this.props.navigation
（1）push - 导航到堆栈中的一个新的路由
（2）pop - 返回堆栈中的上一个页面
（3）popToTop - 跳转到堆栈中最顶层的页面
（4）replace - 用新路由替换当前路由
 */

/**
 * goBack - 关闭当前页面并返回上一个页面
 * 
 * 默认情况下, goBack 将关闭调用该方法的页面 如果目标是在的任何位置返回 *, 
 * 而不指定要关闭的内容, 请调用 . goBack (null); 注意, null 参数在嵌套 StackNavigators 的情况下很有用。
 * 如果子导航器在堆栈中已经只有一个项目, 则返回父导航器。
 * 
 */
class HomeScreen extends React.Component {
    render() {
        const { goBack } = this.props.navigation;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>HomeScreen</Text>
                <Button title="Go back Details" onPress={() => this.props.navigation.navigate("Details")}>
                </Button>
                <Button title="Go back from this HomeScreen" onPress={() => this.props.navigation.goBack()}>
                </Button>
                <Button title="Go back anywhere" onPress={() => this.props.navigation.goBack(null)}>
                </Button>
            </View>
        );
    }
}

class DetailsScreen extends React.Component {
    render() {
        const { goBack } = this.props.navigation;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Go back from this HomeScreen" onPress={() => goBack()}>
                </Button>
            </View>
        );
    }
}

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    Details: DetailsScreen,
});

export default class NavigationProp_Test extends React.Component {
    render() {
        return <HomeStack />;
    }
}



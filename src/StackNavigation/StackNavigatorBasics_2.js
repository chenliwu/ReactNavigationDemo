import React, { Component } from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import { createStackNavigator } from 'react-navigation';


/**

 设置标题栏显示的标题

 每个页面组件可以有一个名为navigationOptions的静态属性，它是一个对象或一个返回包含各种配置选项的对象的函数。

 我们用于设置标题栏的标题的是title这个属性，如以下示例所示。

 createStackNavigator默认情况下按照平台惯例设置，所以在iOS上标题居中，在Android上左对齐。

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

/**

 传递给navigationOptions函数的参数是具有以下属性的对象：

 （1）navigation - 页面的 导航属性 ，在页面中的路由为navigation.state。
 （2）screenProps - 从导航器组件上层传递的 props
 （3）navigationOptions - 如果未提供新值，将使用的默认或上一个选项
 在上面的示例中，我们只需要navigation 属性，但在某些情况下，你可能需要使用screenProps或navigationOptions。

 */

/**
 *

 使用setParams更新navigationOptions

 通常有必要从已加载的页面组件本身更新当前页面的navigationOptions配置。 我们可以使用this.props.navigation.setParams来做到这一点


 */

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
        },
    }
);

export default class StackNavigatorBasics extends React.Component {
    render() {
        return <RootStack />;
    }
}


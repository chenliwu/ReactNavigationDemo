import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    createDrawerNavigator
} from 'react-navigation';

/**
 * Drawer navigation
 * 2018-08-30
 */

class MyHomeScreen extends React.Component {

    static navigationOptions = {
        drwerLabel: 'Home',
        drwerIcon: ({ tintColor }) => (
            <Image source={require('./../assets/icon/icon_my_yes.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            ></Image>
        )
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="Go to Notications" onPress={() => {
                    this.props.navigation.navigate("Notification");
                }}>
                </Button>
            </View>
        );
    }
}


class MyNotification extends React.Component {
    static navigationOptions = {
        drawerLabel: "Notification",
        drawerIcon: ({ tintColor }) => (
            <Image source={require("./../assets/icon/icon_report_yes.png")}
                style={[styles.icon, { tintColor: tintColor }]}></Image>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="GO to Home" onPress={() => {
                    this.props.navigation.goBack();
                }}></Button>
            </View>
        );
    }

}



//创建样式对象
const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

//创建DrawerNavigator导航器对象
const MyApp = createDrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notification: {
        screen: MyNotification,
    }},
    {
        initialRouteName:"Notification",  //第一次加载时初始选项卡路由的 routeName。
        drawerWidth:Dimensions.get('window').width/2,   //抽屉的宽度或返回它的函数。
        drawerPosition:'left',          //选项为 左 或 右. 默认值为 左 位置。
        drawerBackgroundColor:'white',   //使用某种颜色的抽屉背景。默认值为 白色。
    }
);

//导出类
export default class MyDrawerNavigator extends React.Component {
    render() {
        return (
            <MyApp></MyApp>
        );
    }
}


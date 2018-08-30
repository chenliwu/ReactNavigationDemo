import React from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet
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
        drwerLabel:'Home',
        drwerIcon:({tintColor})=>(
            <Image source={require('./../assets/icon/icon_my_yes.png')}
                    style={[styles.icon,{tintColor:tintColor}]}
            ></Image>
        )
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Button title="go to notications" onPress={()=>{
                    this.props.navigation.navigate("Notification");
                }}>
                </Button>
            </View>
        );
    }
}


class MyNotification extends React.Component{
    static navigationOptions = {
        drawerLabel:"Notification",
        drawerIcon:({tintColor}) =>(
            <Image source={}></Image>
        )
    }
}



//创建样式对象
const styles = StyleSheet.create({
    icon:{
        width:24,
        height:24,
    },
});

//创建DrawerNavigator导航器对象
const MyApp = createDrawerNavigator({
    Home:{
        screen:MyHomeScreen
    }
});


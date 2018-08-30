import React from 'react';
import { 
    View,
    Text,
    Button
 } from 'react-native';


export default class DetailsPage extends React.Component{

    render(){
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>Details Page</Text>
                <Button title="返回上一页" onPress={()=>{
                    this.props.navigation.goBack();
                }}></Button>
            </View>
        );
    }

}

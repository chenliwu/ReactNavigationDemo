import { AppRegistry } from 'react-native';

//import StackNavigatorBasics from './src/StackNavigatorBasics';
//import StackNavigatorBasics from './src/StackNavigation/StackNavigatorBasics_2';
//import TabNavigatorBasics from './src/TabNavigation/TabNavigationBasics';
import createStackNavigatorAPI_Test from './src/StackNavigation/createStackNavigatorAPI_Test';
import createBottomTabNavigatorAPI_Test from './src/TabNavigation/createBottomTabNavigatorAPI_Test';
import NavigationProp_Test from './src/NavigationProp_Test/NavigationPropTest_1';
import DeawerNavigator from './src/DrawerNavigation/DrawerNavigation_1';
import MyStackNavigator from './src/MyStackNavigator/MyStackNavigator';
import MyTabNavigator from './src/MyTabNavigator/MyTabNavigator';
import createSwitchNavigator_Test from './src/createSwitchNavigator/createSwitchNavigator_Test';
import StatusBar_Test from './src/StatusBar/StatusBar_Test';
import navigationOptions_Test from './src/navigationOptions_Test/navigationOptions_Test4';
import BytterLaunchPage from './src/bytter/pages/LaunchPage';

//AppRegistry.registerComponent('ReactNavigationDemo', () => App);
//AppRegistry.registerComponent('ReactNavigationDemo', () => StackNavigatorBasics);
//AppRegistry.registerComponent('ReactNavigationDemo', () => DeawerNavigator);
//AppRegistry.registerComponent('ReactNavigationDemo', () => createSwitchNavigator_Test);
AppRegistry.registerComponent("ReactNavigationDemo",() => BytterLaunchPage);
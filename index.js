import { AppRegistry } from 'react-native';

//import StackNavigatorBasics from './src/StackNavigatorBasics';
//import StackNavigatorBasics from './src/StackNavigation/StackNavigatorBasics_2';
import TabNavigatorBasics from './src/TabNavigation/TabNavigationBasics';

import NavigationProp_Test from './src/NavigationProp_Test/NavigationPropTest_1';
import DeawerNavigator from './src/DrawerNavigation/DrawerNavigation_1';

import MyStackNavigator from './src/MyStackNavigator/MyStackNavigator';

import MyTabNavigator from './src/MyTabNavigator/MyTabNavigator';

//AppRegistry.registerComponent('ReactNavigationDemo', () => App);
//AppRegistry.registerComponent('ReactNavigationDemo', () => StackNavigatorBasics);
//AppRegistry.registerComponent('ReactNavigationDemo', () => DeawerNavigator);
AppRegistry.registerComponent('ReactNavigationDemo', () => MyTabNavigator);
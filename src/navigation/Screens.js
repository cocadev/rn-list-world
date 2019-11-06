import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/User/Login';
import HeightUnequalExample from '../screens/LargeList/HeightUnequalExample';
import {HeightEqualExample} from '../screens/LargeList/HeightEqualExample';
import { MessageExample } from '../screens/LargeList/MessageExample';
import { ContactExample } from '../screens/LargeList/ContactExample';
import { MenuListExample } from '../screens/LargeList/MenuListExample';
import { RefreshAndLoadingExample } from '../screens/LargeList/RefreshAndLoadingExample';

const LoginNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: () => ({ header: null })},
  HeightUnequalExample: { screen: HeightUnequalExample, navigationOptions: () => ({ header: null })},
  HeightEqualExample: { screen: HeightEqualExample, navigationOptions: () => ({ header: null })},
  MessageExample: { screen: MessageExample, navigationOptions: () => ({ header: null })},
  ContactExample: { screen: ContactExample, navigationOptions: () => ({ header: null })},
  MenuListExample: { screen: MenuListExample, navigationOptions: () => ({ header: null })},
  RefreshAndLoadingExample: { screen: RefreshAndLoadingExample, navigationOptions: () => ({ header: null })},

});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Login: LoginNavigator,
  }),
);

export default AppContainer;

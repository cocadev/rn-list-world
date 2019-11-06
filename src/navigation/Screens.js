import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/User/Login';
import HeightUnequalExample from '../screens/LargeList/HeightUnequalExample';
import HeightEqualExample from '../screens/LargeList/HeightEqualExample';

const LoginNavigator = createStackNavigator({
  Login: { screen: LoginScreen, navigationOptions: () => ({ header: null })},
  HeightUnequalExample: { screen: HeightUnequalExample, navigationOptions: () => ({ header: null })},
  HeightEqualExample: { screen: HeightEqualExample, navigationOptions: () => ({ header: null })},

});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Login: LoginNavigator,
  }),
);

export default AppContainer;

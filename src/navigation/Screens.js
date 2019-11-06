import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from '../screens/User/Login';

const LoginNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
});

const AppContainer = createAppContainer(
  createSwitchNavigator({
    Login: LoginNavigator,
  }),
);

export default AppContainer;

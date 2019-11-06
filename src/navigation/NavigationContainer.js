import React, {Component} from 'react';
import AppContainer from './Screens';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
]);

class NavigationContainer extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}

export default NavigationContainer;

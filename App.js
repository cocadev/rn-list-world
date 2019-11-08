import React, {Component} from 'react';
import NavigationContainer from './src/navigation/NavigationContainer';
import Backendless from 'backendless';

const APP_ID = 'DAC4D020-9129-B7B3-FFBC-E433549A3400';
const APP_KEY = '310C66D2-D021-4997-940D-4E946F04C9FD';
Backendless.initApp(APP_ID, APP_KEY);

export default class App extends Component {
  render() {
    return <NavigationContainer />;
  }
}

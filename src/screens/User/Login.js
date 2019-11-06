import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './loginStyles';


class Login extends Component {
  
  render() {
   
    return (
      <View style={styles.container}>
          <Text style={styles.title}>LargeListExamples</Text>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HeightUnequalExample')}>
             <Text>HeightUnequalExample</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

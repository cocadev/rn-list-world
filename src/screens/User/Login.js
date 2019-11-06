import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './loginStyles';

const largeList = [
  'HeightUnequalExample',
  'HeightEqualExample'
]

class Login extends Component {
  
  render() {
   
    return (
      <View style={styles.container}>
          <Text style={styles.title}>LargeListExamples</Text>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HeightUnequalExample')}>
             <Text>HeightUnequalExample</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>this.props.navigation.navigate('HeightEqualExample')}>
             <Text>HeightEqualExample</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

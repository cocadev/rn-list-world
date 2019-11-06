import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './loginStyles';

const largeList = [
  'HeightUnequalExample',
  'HeightEqualExample',
  'MessageExample',
  'ContactExample',
  'MenuListExample',
  'RefreshAndLoadingExample',
  'IntensiveSectionExample',
  'ChatExample'
]

export default class Login extends Component {

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>LargeListExamples</Text>
        {
          largeList.map((item, index) =>
            <TouchableOpacity
              key={index}
              style={styles.button}
              onPress={() => this.props.navigation.navigate(item)}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          )
        }

      </View>
    );
  }
}
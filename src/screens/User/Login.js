import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './loginStyles';

const MyList = [
  {
    title: 'LargeListExamples',
    items: [
      'HeightUnequalExample',
      'HeightEqualExample',
      'MessageExample',
      'ContactExample',
      'MenuListExample',
      'RefreshAndLoadingExample',
      'IntensiveSectionExample',
      'ChatExample',
      'FlatListExample',
      'StickyFormExample',
      'WaterfallListExample',
      'PictureExample'
    ]
  }, {
    title: 'Pagenation',
    items: [
      'AutoLoadRefresh',
      'LoadMore',
      'InfiniteScroll'
    ]
  },
  {
    title: 'react-native-fast-image',
    items: ['FastImageExample']
  }
]

export default class Login extends Component {

  render() {

    return (
      <View style={styles.container}>
        {
          MyList.map((item, index) =>
            <View key={index}>
              <Text style={styles.title}>{item.title}</Text>
              {item.items.map((k, ix) =>
                <TouchableOpacity
                  key={ix}
                  style={styles.button}
                  onPress={() => this.props.navigation.navigate(k)}
                >
                  <Text style={styles.buttonText}>{k}</Text>
                </TouchableOpacity>)}
            </View>
          )
        }
      </View>
    );
  }
}
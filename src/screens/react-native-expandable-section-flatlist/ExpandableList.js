import React from 'react';
import {View, Text, TouchableOpacity, AppRegistry} from 'react-native';

import ExpandableList from 'react-native-expandable-section-flatlist';
import MockData from './constants/mockData';
import DictStyle from './constants/dictStyle';

export default class ExpandableListScreen extends React.PureComponent {
  _renderRow = (rowItem, rowId, sectionId) => (
    <TouchableOpacity key={rowId} onPress={() => {}}>
      <View
        style={{
          alignItems: 'center',
          margin: 5,
          padding: 5,
          borderWidth: 0.5,
          borderColor: DictStyle.colorSet.lineColor,
        }}>
        <Text
          style={{
            fontSize: DictStyle.fontSet.mSize,
            color: DictStyle.colorSet.normalFontColor,
          }}>
          {rowItem.title}
        </Text>
      </View>
    </TouchableOpacity>
  );

  _renderSection = (section, sectionId) => {
    return (
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 15,
          height: 30,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderBottomColor: DictStyle.colorSet.lineColor,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: DictStyle.fontSet.mSize,
              color: DictStyle.colorSet.normalFontColor,
            }}>
            {section}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: DictStyle.fontSet.xSize,
              color: DictStyle.colorSet.weakFontColor,
            }}>
            {'更多 '}
          </Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ExpandableList
        dataSource={MockData.workbenchData}
        headerKey="title"
        memberKey="member"
        renderRow={this._renderRow}
        renderSectionHeaderX={this._renderSection}
        openOptions={[1, 2]}
      />
    );
  }
}

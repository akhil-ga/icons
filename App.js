import React from 'react';
import { StackNavigator } from 'react-navigation';
import IconList from './src/components/IconList';
import IconFamilyList from './src/components/IconFamilyList';

export default StackNavigator({
  IconFamilyList: {
    screen: IconFamilyList
  },
  IconList: {
    screen: IconList
  }
}, {
    navigationOptions: {
      header: null
    }
  });
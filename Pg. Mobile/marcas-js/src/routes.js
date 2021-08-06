import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Feed from './screens/Feed';
import { Text } from 'react-native';

const { Navigator , Screen } = createNativeStackNavigator();

function Routes() {
  return (
    <Navigator>
      <Screen name="Feed" component={Feed}/>
      <Screen name="Feed2" component={Feed}/>
    </Navigator>
  );
};

export default Routes;

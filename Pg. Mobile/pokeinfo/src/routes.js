import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'; 

const Stack = createStackNavigator();

// Screens 
import Feed from './screens/Feed';

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemons" component={Feed}/>
    </Stack.Navigator>
  );
};

export default Routes;

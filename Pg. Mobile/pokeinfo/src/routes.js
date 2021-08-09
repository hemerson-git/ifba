import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Screens
import Feed from "./screens/Feed";
import Pokemon from "./screens/Pokemon";

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemons" component={Feed} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}

export default Routes;

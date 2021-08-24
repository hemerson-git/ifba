import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

// Screens
import Feed from "./screens/Feed";
import Pokemon from "./screens/Pokemon";
import MoreInfos from "./screens/MoreInfos";

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokemons" component={Feed} />
      <Stack.Screen name="Pokemon" component={Pokemon} />
      <Stack.Screen name="Mais Informações" component={MoreInfos} />
    </Stack.Navigator>
  );
}

export default Routes;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Screens
import Feed from "./screens/Feed";

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen name="Feed" component={Feed} />
    </Stack.Navigator>
  );
}

export default Routes;

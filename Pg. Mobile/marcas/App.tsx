import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { MenuProvider } from "react-native-popup-menu";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <MenuProvider>
        <StatusBar style="auto" />
        <Routes />
      </MenuProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

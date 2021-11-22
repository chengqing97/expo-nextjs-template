import React from "react";
import { enableScreens } from "react-native-screens";
//import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

// components
import Root from "./Root";

enableScreens(true);

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar style="dark" /> */}
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

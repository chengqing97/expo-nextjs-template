import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//import pages
import Orders from "../screens/Orders";

const Stack = createNativeStackNavigator();
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Orders" component={Orders} />
    </Stack.Navigator>
  );
};

export default MainStack;

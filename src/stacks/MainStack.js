import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Preload from "../screens/Preload";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import MainTab from "../stacks/MainTab";
import Barber from "../screens/Barber";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator
    initialRouteName="Preload"
    screenOptions={{ headerShow: false }}
  >
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SignIn" />
    <Stack.Screen name="" />
  </Stack.Navigator>
);

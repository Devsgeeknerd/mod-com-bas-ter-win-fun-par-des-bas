import React from "react";
import { createBottomNavigator } from "@react-navigation/bottom-tabs";

import CustomTabBar from "../components/CustomTabBar";

import Home from "../screens/Home";
import Search from "../screens/Search";
import Appointments from "../screens/Appointments";
import Favorites from "../screens/Favorites";
import Profile from "../screens/Profile";

const Tab = createBottomNavigator();

export default () => (
  <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Search" component={}/>
  </Tab.Navigator>
);

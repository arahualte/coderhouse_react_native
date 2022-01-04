import React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/Home";
import { Login } from "../screens/Login";
import { Profile } from "../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

export const BarNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFF"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "#7B2CBF" }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Archieved" component={Login} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home, Profile, SignUp, Login } from "../screens";

const Tab = createMaterialBottomTabNavigator();

export const BarNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        activeColor="#FFF"
        inactiveColor="grey"
        barStyle={{ backgroundColor: "#7B2CBF" }}
      >
        <Tab.Screen name="Login" component={Login} shifting={false} />
        <Tab.Screen name="SignUp" component={SignUp} />
        <Tab.Screen name="Home" component={Home} />
        {/* <Tab.Screen name="Archieved" component={Archieved} /> */}
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { VStack } from "native-base";
import React from "react";
import CartIcon from "../Shared/CartIcon";
import CartNavigator from "./CartNavigator";
import HomeNavigator from "./HomeNavigator";

const { Screen, Navigator } = createBottomTabNavigator();

const Main = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#e91e63",
        // tabBarShowLabel: false,
        showIcon: true,
        tabBarHideOnKeyboard: true,
        tabBarInactiveBackgroundColor: "#f9f9f9",
      }}
    >
      <Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name={"home"}
              color={color}
              style={{ position: "relative" }}
              size={24}
            />
          ),
        }}
      />
      <Screen
        name="CartNav"
        component={CartNavigator}
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => (
            <VStack>
              <CartIcon />
              <Ionicons name={"cart"} color={color} size={24} />
            </VStack>
          ),
        }}
      />
      <Screen
        name="Admin"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"layers"} color={color} size={24} />
          ),
        }}
      />
      <Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"person"} color={color} size={24} />
          ),
        }}
      />
    </Navigator>
  );
};

export default Main;

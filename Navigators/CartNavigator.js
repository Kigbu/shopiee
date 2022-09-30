import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cart from "../Screens/Cart/Cart";
import Header from "../Shared/Header";
import CheckoutNavigator from "./CheckoutNavigator";

const { Screen, Navigator } = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Cart"
        component={Cart}
        options={{
          title: "Cart",
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              route={route}
              main
              options={options}
            />
          ),
        }}
      />
      <Screen
        name="CheckoutNav"
        component={CheckoutNavigator}
        options={{
          title: "Checkout",
          header: ({ navigation, route, options }) => (
            <Header navigation={navigation} route={route} options={options} />
          ),
        }}
      />
    </Navigator>
  );
};

export default CartNavigator;

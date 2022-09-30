import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Payment from "../Screens/Cart/Checkout/Payment";
import Checkout from "../Screens/Cart/Checkout/Checkout";
import Confirm from "../Screens/Cart/Checkout/Confirm";

const { Screen, Navigator } = createMaterialTopTabNavigator();

const CheckoutNavigator = () => {
  return (
    <Navigator>
      <Screen name={"Shipping"} component={Checkout} />
      <Screen name={"Payment"} component={Payment} />
      <Screen name={"Confirm"} component={Confirm} />
    </Navigator>
  );
};

export default CheckoutNavigator;

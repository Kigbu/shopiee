import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ProductContainer from "../Screens/Products/ProductContainer";
import SingleProduct from "../Screens/Products/SingleProduct";
import Header from "../Shared/Header";

const { Screen, Navigator } = createNativeStackNavigator();
const HomeNavigator = () => {
  return (
    <Navigator>
      <Screen
        name="Product"
        component={ProductContainer}
        options={{
          title: "Home",
          header: ({ navigation, route, options }) => (
            <Header
              navigation={navigation}
              main
              route={route}
              options={options}
            />
          ),
        }}
      />

      <Screen
        name="Product Details"
        component={SingleProduct}
        options={{
          title: "Product Detail",
          header: ({ navigation, route, options }) => (
            <Header navigation={navigation} route={route} options={options} />
          ),
        }}
      />
    </Navigator>
  );
};

export default HomeNavigator;

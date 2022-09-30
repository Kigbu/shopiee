import React from "react";
import {
  Dimensions,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ProductCard from "./ProductCard";

const { width } = Dimensions.get("window");

const ProductList = ({ key, products }) => {
  return (
    <View
      style={{
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {products.map((item) => (
        <ProductCard key={item.id} data={item} />
      ))}
      {/* <FlatList
        data={products}
        // horizontal
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        // contentContainerStyle={{ paddingBottom: 300 }}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <ProductCard key={item.id} data={item} />}
      /> */}
    </View>
  );
};

export default ProductList;

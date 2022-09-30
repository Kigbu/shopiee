import { useNavigation } from "@react-navigation/native";
import { HStack, Image, Text, VStack } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

const SearchedProducts = ({ productsFiltered }) => {
  const navigation = useNavigation();
  return (
    <VStack my={2}>
      {productsFiltered.length > 0 ? (
        productsFiltered.map((item) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Product Details", {
                item,
              })
            }
          >
            <HStack alignItems={"center"} key={item._id.$oid} mx={4} my={1}>
              <Image
                source={{ uri: item.image }}
                mr={2}
                h={6}
                w={6}
                alt={"products Image"}
              />
              <Text>{item.description}</Text>
            </HStack>
          </TouchableOpacity>
        ))
      ) : (
        <VStack>
          <Text alignSelf={"center"}>No product match your search</Text>
        </VStack>
      )}
    </VStack>
  );
};

export default SearchedProducts;

import { HStack, Image, Text, VStack } from "native-base";
import React, { useState } from "react";
import { colors } from "../../AppStyles";

const CartItem = ({ item }) => {
  const [quantity, seQuantity] = useState();
  // console.log("itemm :>> ", item.item.product);
  return (
    <HStack key={Math.random()} py={1} bgColor={"white"}>
      <Image
        source={{ uri: item.item.product.image }}
        h={12}
        w={12}
        mr={2}
        borderRadius={16}
        alt="cart product image"
      />
      <VStack mr={"auto"}>
        <Text>{item.item.product.name}</Text>
      </VStack>
      <VStack>
        <Text color={colors.primary[100]}>$ {item.item.product.price}</Text>
      </VStack>
    </HStack>
  );
};

export default CartItem;

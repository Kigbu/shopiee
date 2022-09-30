import { Heading, Image, ScrollView, VStack } from "native-base";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

const SingleProduct = ({ route }) => {
  const [item, setItem] = useState(route.params.item);
  const [availability, setAvailability] = useState("");
  return (
    <VStack style={styles.container}>
      <ScrollView style={{}}>
        <VStack>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: item.image }}
            alt={item.name}
          />
        </VStack>
        <VStack mx={4} my={2}>
          <Heading>{item.name}</Heading>
        </VStack>
      </ScrollView>
    </VStack>
  );
};

export default SingleProduct;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: "100%",
  },
  image: {
    width: "100%",
    height: 250,
  },
});

import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../AppStyles";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack } from "native-base";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";

const { width } = Dimensions.get("window");

const actualWidth = width - 32;

const ProductCard = ({ data, addItemToCart }) => {
  const navigation = useNavigation();
  const { _id, name, image, brand, price, rating, countInStock } = data;
  return (
    <>
      {data && (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Product Details", {
              item: data,
            })
          }
          style={[styles.container]}
          key={_id.oid}
        >
          <View style={styles.discountWrapper} key={_id.oid}>
            <Text style={styles.discountText}>-20%</Text>
          </View>
          <View style={styles.likeButtonWrapper}>
            <Ionicons name="heart-outline" size={24} />
          </View>
          <Image
            style={styles.cardImage}
            resizeMode="cover"
            source={{ uri: image }}
          />
          {/* <Rating ratingValue={rating} /> */}

          <Text style={styles.cardBrand}>{brand}</Text>
          <Text style={styles.cardName}>{name}</Text>
          <Text style={styles.cardPrice}>${price}</Text>
          {!data.image && <Text style={styles.placeholderTitle}>{name}</Text>}
          {countInStock > 0 ? (
            <HStack>
              <Button
                onPress={() => {
                  addItemToCart(data);
                }}
              >
                Add
              </Button>
            </HStack>
          ) : (
            <Text>Out of Stock</Text>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch(actions.addToCart({ quantity: 1, product })),
  };
};

export default connect(null, mapDispatchToProps)(ProductCard);

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 280,
    width: actualWidth / 2 - 8,
    marginBottom: 16,
    // marginHorizontal: 20,
    // backgroundColor: 'red',
  },
  discountWrapper: {
    position: "absolute",
    zIndex: 1,
    width: 40,
    height: 24,
    borderRadius: 24,
    marginLeft: 8,
    marginTop: 8,
    backgroundColor: colors.primary[100],
    justifyContent: "center",
    alignItems: "center",
  },
  discountText: {
    color: colors.white,
    // fontFamily: "OpenSans-SemiBold",
    fontSize: 12,
    // backgroundColor: 'blue',
  },
  cardImage: {
    height: 160,
    width: actualWidth / 2 - 8,
    borderRadius: 8,
  },
  likeButtonWrapper: {
    position: "absolute",
    zIndex: 1,
    width: 40,
    height: 40,
    backgroundColor: colors.white,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    top: 140,
    left: 108,
  },
  cardName: {
    color: colors.black,
    // fontFamily: "OpenSans-Bold",
    fontSize: 16,
    paddingTop: 5,
    // backgroundColor: 'blue',
  },
  cardBrand: {
    marginTop: 4,
    fontSize: 10,
  },
  cardPrice: {
    // fontFamily: "OpenSans-SemiBold",
    fontSize: 16,
    color: colors.primary[100],
  },
  placeholderTitle: {
    position: "absolute",
    top: 5,
    width: 70,
    textAlign: "center",
    alignSelf: "center",
    fontSize: 10,
    fontWeight: "bold",
    // backgroundColor: 'black',
  },
});

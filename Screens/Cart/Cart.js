import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Center,
  Divider,
  HStack,
  Image,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/cartActions";
import { colors } from "../../AppStyles";
import CartItem from "./CartItem";
import { SwipeListView } from "react-native-swipe-list-view";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const Cart = ({ cartItems, clearCart, removeFromCart }) => {
  const navigation = useNavigation();
  // const [totalPrice, setTotalPrice] = useState(0);

  var total = 0;
  cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });
  return (
    <>
      {cartItems.length ? (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack
              flex={1}
              p={4}
              pb={16}
              bgColor={"white"}
              minH={height - 150}
            >
              <SwipeListView
                data={cartItems}
                disableRightSwipe={true}
                previewOpenDelay={3000}
                friction={1000}
                tension={40}
                leftOpenValue={75}
                stopLeftSwipe={75}
                rightOpenValue={-75}
                renderItem={(data) => {
                  return <CartItem item={data} />;
                }}
                renderHiddenItem={(data) => (
                  <VStack style={styles.hiddenContainer}>
                    <TouchableOpacity
                      onPress={() => removeFromCart(data.item)}
                      style={styles.hiddenButton}
                    >
                      <Ionicons name={"trash-bin"} size={24} color={"white"} />
                    </TouchableOpacity>
                  </VStack>
                )}
              />
              {/* {cartItems.map(({ product }) => {
                return <CartItem item={product} />;
              })} */}
            </VStack>
          </ScrollView>
          <VStack
            w={"100%"}
            position={"absolute"}
            alignSelf={"center"}
            bottom={0}
            // shadow={2}
            // m={2}
            py={2}
            px={4}
            bgColor={"white"}
          >
            <Divider orientation="horizontal" h={0.2} mb={2} />
            <HStack alignItems={"center"}>
              <VStack mr={"auto"}>
                <Text>$ {total}</Text>
              </VStack>
              <VStack>
                <Button variant="link" mr={1} onPress={() => clearCart()}>
                  Clear Cart
                </Button>
              </VStack>
              <VStack>
                <Button onPress={() => navigation.navigate("CheckoutNav")}>
                  Check Out
                </Button>
              </VStack>
            </HStack>
          </VStack>
        </>
      ) : (
        <Center flex={1} bgColor={"white"}>
          <Text>Cart Empty</Text>
        </Center>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
  };
};

const styles = StyleSheet.create({
  hiddenContainer: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  hiddenButton: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 25,
    // height: 70,
    width: width / 1.2,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

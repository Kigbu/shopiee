import { Center, Text } from "native-base";
import React from "react";
import { connect } from "react-redux";
import { colors } from "../AppStyles";

const CartIcon = ({ cartItems }) => {
  return (
    <>
      {cartItems.length ? (
        <Center
          position={"absolute"}
          top={-2}
          right={-10}
          h={4}
          w={4}
          zIndex={1}
          borderRadius={16}
          bgColor={"purple.700"}
        >
          <Text color={"white"} fontSize={10}>
            {cartItems.length}
          </Text>
        </Center>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => {
  const { cartItems } = state;
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(CartIcon);

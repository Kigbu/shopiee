import { HStack, Text } from "native-base";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

const Header = ({ main, route, options, navigation }) => {
  return (
    <SafeAreaView>
      <HStack bgColor={"white"} px={4}>
        {!main && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name={"arrow-back"} size={24} color={"grey"} />
          </TouchableOpacity>
        )}
        {/* <Text>{options.title ? options.title : route.params.ScreenTitle}</Text> */}
        <Image
          source={require("../assets/Logo.png")}
          resizeMode={"contain"}
          style={{ height: 32, width: "100%" }}
        />
      </HStack>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

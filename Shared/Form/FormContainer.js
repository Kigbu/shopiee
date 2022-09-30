import { ScrollView, Text } from "native-base";
import React, { Children } from "react";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

const FormContainer = ({ title, children }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}> {title}</Text>
      {children}
    </ScrollView>
  );
};

export default FormContainer;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
  },
});

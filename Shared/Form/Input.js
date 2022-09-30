import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({ placeholder, name, id, value }) => {
  return (
    <TextInput
      placeholder={placeholder}
      name={name}
      id={id}
      value={value}
      autoCorrect={autoCorrect}
      onChangeText={onChangeText}
      onFocus={onFocus}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    margin: 10,
    padding: 10,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "orange",
  },
});

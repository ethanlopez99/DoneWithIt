import React from "react";

import { StyleSheet } from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { TouchableOpacity } from "react-native";

function AppButton(props) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: props.color }]}
      onPress={props.onPress}
    >
      <AppText>{props.children}</AppText>
    </TouchableOpacity>
  );
}

export default AppButton;

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
});

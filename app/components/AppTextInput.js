import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";

import colors from "../config/colors";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function AppTextInput({ icon, placeholder }) {
  return (
    <View style={styles.container}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          style={styles.icon}
          size={25}
          color="grey"
        />
      )}
      <TextInput placeholder={placeholder} style={defaultStyles.inputText} />
    </View>
  );
}

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginTop: 10,
    alignItems: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
});

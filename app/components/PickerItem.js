import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import AppText from "./AppText";
import defaultStyles from "../config/styles";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function PickerItem({ label, onPress, icon, iconColor }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
        {icon && (
          <MaterialCommunityIcons
            name={icon}
            size={45}
            color="white"
            style={[styles.icon, { backgroundColor: iconColor }]}
          />
        )}
        <AppText style={styles.text}>{label}</AppText>
      </View>
    </TouchableOpacity>
  );
}

export default PickerItem;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: 120,
    alignItems: "center",
  },
  icon: {
    borderRadius: 35,
    alignSelf: "center",
    padding: 10,
  },
  text: {
    padding: 5,
    fontSize: 15,
    textAlign: "center",
  },
});

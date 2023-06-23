import React from "react";
import { View, StyleSheet } from "react-native";

function ListItemSeparator() {
  return <View style={styles.separator} />;
}

export default ListItemSeparator;

const styles = StyleSheet.create({
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
});

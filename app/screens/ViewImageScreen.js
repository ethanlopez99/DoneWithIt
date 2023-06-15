import React from "react";
import { SafeAreaView, View, StyleSheet, Image, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
      <MaterialCommunityIcons
        name="close"
        size={35}
        color="white"
        style={styles.closeIcon}
      />
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={35}
        color="white"
        style={styles.deleteIcon}
      />
    </View>
  );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    top: 50,
    position: "absolute",
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

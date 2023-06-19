import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

function Card(props) {
  return (
    <View style={styles.card_container}>
      <Image source={props.image} style={styles.image}></Image>
      <View style={styles.details_container}>
        <Text style={[styles.text, { color: "black", marginBottom: 7 }]}>
          {props.title}
        </Text>
        <Text style={[styles.text, { color: "green", fontWeight: "bold" }]}>
          {props.description}
        </Text>
      </View>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card_container: {
    borderRadius: 20,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
  },
  details_container: {
    padding: 20,
  },
  text: {
    fontSize: 15,
  },
  image: {
    width: "100%",
    height: 200,
  },
});

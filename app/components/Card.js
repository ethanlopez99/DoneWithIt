import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native";

function Card({ imageURL, title, description, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card_container}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <View style={styles.details_container}>
          <Text style={[styles.text, { color: "black", marginBottom: 7 }]}>
            {title}
          </Text>
          <Text style={[styles.text, { color: "green", fontWeight: "bold" }]}>
            ${description}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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

import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";
import ListItem from "../components/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View style={{ flex: 1 }}>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.listing_details}>
        <Text style={styles.text}>Red Jacket For Sale!</Text>
        <Text style={[styles.text, { color: "green", marginTop: 5 }]}>
          $100
        </Text>
      </View>
      <ListItem image={require("../assets/mosh.jpg")} description="5 Listings">
        Mosh Hamedani
      </ListItem>
    </View>
  );
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  listing_details: {
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
  },
});

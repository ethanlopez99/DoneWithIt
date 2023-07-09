import React from "react";

import { StyleSheet, View, Image, Text } from "react-native";
import ListItem from "../components/lists/ListItem";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Image source={{ uri: listing.images[0].url }} style={styles.image} />
      <View style={styles.listing_details}>
        <Text style={styles.text}>{listing.title}</Text>
        <Text style={[styles.text, { color: "green", marginTop: 5 }]}>
          ${listing.price}
        </Text>
      </View>
      <ListItem
        image={require("../assets/mosh.jpg")}
        description="5 Listings"
        title="Mosh Hamedani"
      />
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

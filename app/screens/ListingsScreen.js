import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

import colors from "../config/colors";

import { useState } from "react";

initial_listings = [
  {
    id: 1,
    title: "Red jacket for sale",
    price: "$100",
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: "$1000",
    image: require("../assets/couch.jpg"),
  },
];

function ListingsScreen(props) {
  const [listings, setListings] = useState(initial_listings);
  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen style={styles.screen}>
      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            image={item.image}
            title={item.title}
            description={item.price}
          ></Card>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setListings([
            {
              id: 3,
              title: "Couch in poor condition",
              price: "$500",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

export default ListingsScreen;

const styles = StyleSheet.create({
  list: {
    padding: 20,
  },
  screen: {
    backgroundColor: colors.grey,
  },
});

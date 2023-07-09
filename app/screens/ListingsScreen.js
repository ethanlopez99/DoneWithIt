import React, { useEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import Screen from "../components/Screen";

import listingsAPI from "../api/listings";

import colors from "../config/colors";

import routes from "../navigation/routes";

import { useState } from "react";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import ActivityIndicator from "../components/ActivityIndicator";

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);

  const [error, setError] = useState();

  const [loading, setLoading] = useState();

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsAPI.getListings();
    setLoading(false);

    setError(!response.ok);

    setListings(response.data);
  };

  const [refreshing, setRefreshing] = useState(false);
  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Listings could not be retrieved.</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            imageURL={item.images[0].url}
            title={item.title}
            description={item.price}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          ></Card>
        )}
        refreshing={refreshing}
        onRefresh={() => {
          loadListings;
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
    backgroundColor: colors.light,
  },
});

import React from "react";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import WelcomeScreen from "./WelcomeScreen";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Mosh Hamedani"
          description="programmingwithmosh@gmail.com"
          image={require("../assets/mosh.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              ImageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
              onPress={() => 0}
            />
          )}
          ItemSeparatorComponent={<ListItemSeparator />}
        ></FlatList>
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          ImageComponent={<Icon name="logout" backgroundColor="gold" />}
          onPress={() => 0}
        />
      </View>
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    backgroundColor: "#f6f4f4",
  },
});

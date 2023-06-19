import React from "react";

import { useState } from "react";

import { StyleSheet, TextInput, Text, Switch } from "react-native";

import Screen from "../components/Screen";

function TestScreen(props) {
  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <Switch
        value={isNew}
        onValueChange={(newValue) => setIsNew(newValue)}
      ></Switch>
    </Screen>
  );
}

export default TestScreen;

const styles = StyleSheet.create({
  text: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});

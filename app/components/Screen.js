import React from "react";

import { StyleSheet, SafeAreaView, StatusBar } from "react-native";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.screen, props.style]}>
      {props.children}
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
});

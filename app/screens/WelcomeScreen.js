import React from "react";
import { ImageBackground, View, Text, Image, StyleSheet } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";

import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.image}
      blurRadius={3}
    >
      <View style={styles.logo_container}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <AppText
          style={{
            color: "black",
            margin: 20,
          }}
        >
          Sell What you don't need
        </AppText>
      </View>
      <View style={styles.button_container}>
        <AppButton
          color={colors.primary}
          onPress={() => navigation.navigate(routes.LOGIN)}
          title="LOGIN"
        ></AppButton>
        <AppButton
          color={colors.secondary}
          title="REGISTER"
          onPress={() => navigation.navigate(routes.REGISTER)}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  button_container: {
    position: "absolute",
    bottom: 10,
    width: "95%",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logo_container: {
    position: "absolute",
    top: 100,
    alignItems: "center",
  },
});

export default WelcomeScreen;

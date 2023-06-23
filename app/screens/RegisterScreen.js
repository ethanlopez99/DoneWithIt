import React from "react";

import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required()
    .label("Name")
    .matches(/^[A-Za-z ]+$/, "Name contains invalid characters"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen(props) {
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          name="name"
          icon="account"
          placeholder="Name"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
        />
        <AppFormField
          name="email"
          icon="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          textContentType="emailAddress"
        />

        <AppFormField
          name="password"
          icon="lock"
          placeholder="Password"
          autoCorrect={false}
          secureTextEntry
          textContentType="password"
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default RegisterScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

import React from "react";
import { Platform } from "react-native";

import colors from "./colors";

export default {
  inputText: {
    fontSize: 18,
    color: colors.medium,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
  colors,
};

import React from "react";

import { Text } from "react-native";

import defaultStyles from "../config/styles";
import colors from "../config/colors";

function AppText(props) {
  return (
    colors,
    (
      <Text style={[defaultStyles.inputText, props.style]}>
        {props.children}
      </Text>
    )
  );
}

export default AppText;

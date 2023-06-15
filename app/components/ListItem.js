import React from "react";

import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  renderRightActions,
  onPress,
  image,
  title,
  description,
  style,
  ImageComponent,
}) {
  return (
    <GestureHandlerRootView style={style}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor="lightgray">
          <View style={styles.user_containter}>
            {ImageComponent}
            {image && <Image source={image} style={styles.user_image} />}
            <View
              style={{
                marginLeft: 15,
                justifyContent: "center",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>{title}</Text>
              {description && (
                <Text style={{ color: "grey" }}>{description}</Text>
              )}
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  user_containter: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  user_image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
});

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

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  renderRightActions,
  onPress,
  image,
  title,
  description,
  style,
  ImageComponent,
  showChevron,
}) {
  return (
    <GestureHandlerRootView style={style}>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight onPress={onPress} underlayColor="lightgray">
          <View style={styles.container}>
            {ImageComponent}
            {image && <Image source={image} style={styles.image} />}
            <View
              style={{
                marginLeft: 15,
                justifyContent: "center",
                flex: 1,
              }}
            >
              <Text style={{ fontWeight: "bold" }} numberOfLines={2}>
                {title}
              </Text>
              {description && (
                <Text style={{ color: "grey" }} numberOfLines={2}>
                  {description}
                </Text>
              )}
            </View>
            {showChevron ? (
              <MaterialCommunityIcons
                name="chevron-right"
                style={styles.chevron}
                size={25}
                color="grey"
              />
            ) : null}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  chevron: {
    alignSelf: "center",
  },
});

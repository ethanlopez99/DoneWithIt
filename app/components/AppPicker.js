import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Button,
  Modal,
} from "react-native";

import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import { FlatList } from "react-native-gesture-handler";
import PickerItem from "./PickerItem";
import defaultStyles from "../config/styles";

function AppPicker({
  icon,
  placeholder,
  items,
  onSelectItem,
  selectedItem,
  width,
  horizontal,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width: width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={25}
              color="grey"
            />
          )}

          {selectedItem ? (
            <AppText style={[defaultStyles.inputText, styles.text]}>
              {selectedItem.label}
            </AppText>
          ) : (
            <AppText style={[defaultStyles.inputText, styles.placeholder]}>
              {placeholder}
            </AppText>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            style={styles.chevron}
            size={25}
            color="grey"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <View style={{ alignItems: "center" }}>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            numColumns={3}
            keyExtractor={(item) => item.value.toString()}
            style={{ margin: 10 }}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                icon={item.icon}
                iconColor={item.iconColor}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

export default AppPicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginTop: 10,
    alignItems: "flex-start",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
});

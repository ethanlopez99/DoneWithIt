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

function AppPicker({ icon, placeholder, items, onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              style={styles.icon}
              size={25}
              color="grey"
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            style={styles.chevron}
            size={25}
            color="grey"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType={"slide"}>
        <View>
          <Button title="Close" onPress={() => setModalVisible(false)}></Button>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
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
    backgroundColor: colors.grey,
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
});

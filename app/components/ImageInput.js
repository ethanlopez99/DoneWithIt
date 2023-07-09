import { Image, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useEffect } from "react";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageURI, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted)
      alert("You need to enable permissions to access your camera.");
  };

  useEffect(() => {
    requestPermission();
  }, []); //
  const handlePress = () => {
    if (!imageURI) selectImage();
    else {
      Alert.alert("Delete", "Are you sure you want to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
    }
  };
  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!result.canceled) onChangeImage(result.assets[0].uri);
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      {imageURI && <Image source={{ uri: imageURI }} style={styles.image} />}
      {!imageURI && (
        <MaterialCommunityIcons name="camera" size={35} color={colors.medium} />
      )}
    </TouchableOpacity>
  );
}

export default ImageInput;

const styles = StyleSheet.create({
  container: {
    height: 75,
    width: 75,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});

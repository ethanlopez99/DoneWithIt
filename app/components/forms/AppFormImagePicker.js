import React from "react";
import ImageInputList from "../ImageInputList";
import ErrorMessage from "./ErrorMessage";
import { StyleSheet } from "react-native";

import { useFormikContext } from "formik";

function AppFormImagePicker({ name }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  const imageURIs = values[name];
  const handleAdd = (uri) => {
    setFieldValue(name, [...imageURIs, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageURIs.filter((imageURI) => imageURI !== uri)
    );
  };

  return (
    <>
      <ImageInputList
        imageURIs={imageURIs}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormImagePicker;

const styles = StyleSheet.create({
  container: {},
});

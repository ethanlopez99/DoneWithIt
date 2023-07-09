import React, { useState } from "react";

import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";

import { AppForm, AppFormField, SubmitButton } from "../components/forms";
import AppFormPicker from "../components/forms/AppFormPicker";
import AppFormImagePicker from "../components/forms/AppFormImagePicker";
import useLocation from "../hooks/useLocation";

const categories = [
  { value: 1, label: "Clothing", icon: "shoe-heel", iconColor: "#2bcbba" },
  { value: 2, label: "Furniture", icon: "floor-lamp", iconColor: "#fc5c65" },
  { value: 3, label: "Cars", icon: "car", iconColor: "#fd9644" },
  { value: 4, label: "Games", icon: "cards", iconColor: "#26de81" },
  { value: 5, label: "Cameras", icon: "camera", iconColor: "#fed330" },
  { value: 6, label: "Sports", icon: "basketball", iconColor: "#45aaf2" },
  {
    value: 7,
    label: "Movies & Music",
    icon: "headphones",
    iconColor: "#4b7bec",
  },
];

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label("Title").min(1),
  price: Yup.number().required().positive().label("Price").max(10000),
  description: Yup.string().optional().label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});
function ListingEditScreen(props) {
  const [category, setCategory] = useState();

  const location = useLocation();
  return (
    <Screen style={styles.screen}>
      <AppForm
        initialValues={{
          title: "",
          price: "",
          password: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values, location)}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name="images" />
        <AppFormField
          name="title"
          placeholder="Title"
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
        />
        <AppFormField
          name="price"
          placeholder="Price"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="numeric"
          width="40%"
        />
        <AppFormPicker
          name="category"
          placeholder={"Category"}
          items={categories}
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          width="50%"
        />

        <AppFormField
          name="description"
          placeholder="Description"
          autoCorrect={true}
          autoCapitalize="sentences"
          keyboardType="default"
          numberOfLines={3}
        />

        <SubmitButton title="Register" />
      </AppForm>
    </Screen>
  );
}

export default ListingEditScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 10,
  },
});

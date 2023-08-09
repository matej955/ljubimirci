import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImagePicker,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
// import * as ImagePicker from "expo-image-picker";

const categories = ["Kategorija 1", "Kategorija 2", "Kategorija 3"];
const genders = ["Muški", "Ženski", "Nedefinirano"];

const Form = () => {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleCategoryChange = (itemValue) => {
    setCategory(itemValue);
  };

  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <View style={styles.container}>
      <Picker
        style={styles.input}
        selectedValue={category}
        onValueChange={handleCategoryChange}
      >
        <Picker.Item label="Odaberi kategoriju" value="" />
        {categories.map((cat, index) => (
          <Picker.Item key={index} label={cat} value={cat} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 16,
    top: 350,
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
});

export default Form;

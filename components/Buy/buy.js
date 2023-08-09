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
const genders = ["Muški", "Ženski", "Nedefinirano"]; // Replace with actual gender options

const Buy = () => {
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

  const handleGenderChange = (itemValue) => {
    setGender(itemValue);
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
      <Picker
        style={styles.input}
        selectedValue={type}
        onValueChange={(itemValue) => setType(itemValue)}
      >
        <Picker.Item label="Odaberi vrstu" value="" />
        {/* Add more types based on your requirements */}
      </Picker>
      {/* Repeat the pattern for other form fields */}
      {/* Vrsta, Lokacija, Spol, Dob, Ime, Fotografije */}
      {/* You can use TextInput for single-line text input */}
      <TextInput
        style={styles.input}
        placeholder="Odaberi vrstu"
        value={type}
        onChangeText={(text) => setType(text)}
      />
      {/* Use Picker for dropdowns */}
      <Picker
        style={styles.input}
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
      >
        <Picker.Item label="Odaberi Lokaciju" value="" />
        {/* Add more locations based on your requirements */}
      </Picker>
      {/* Repeat the pattern for other form fields */}
      {/* Vrsta, Lokacija, Spol, Dob, Ime, Fotografije */}
      <Picker
        style={styles.input}
        selectedValue={gender}
        onValueChange={handleGenderChange}
      >
        <Picker.Item label="Odaberi spol" value="" />
        {genders.map((gen, index) => (
          <Picker.Item key={index} label={gen} value={gen} />
        ))}
      </Picker>
      {/* Repeat the pattern for other form fields */}
      {/* Vrsta, Lokacija, Spol, Dob, Ime, Fotografije */}
      {/* For age and name, you can use TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Odaberi dob"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Odaberi ime"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      {/* For images, you can use TouchableOpacity to trigger the image picker */}
      <TouchableOpacity style={styles.imagePicker} onPress={handleImagePicker}>
        <Text style={styles.imagePickerText}>
          {image ? "Promijeni fotografiju" : "Dodaj fotografije"}
        </Text>
      </TouchableOpacity>
      {/* You can display the selected image if available */}
      {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  imagePicker: {
    height: 40,
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  imagePickerText: {
    color: "#fff",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginTop: 16,
  },
});

export default Buy;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const SignUp = ({}) => {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const handleRegistration = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);

      if (user) {
        console.log(user.user.uid);
        alert("Uspješno ste se registrirali!");
        navigation.navigate("Prijava");
      }
    } catch (error) {
      console.log(error);
    }

    if (email == "" || password == "") {
      alert("Niste unijeli sve podatke!");
    }
  };

  return (
    <ImageBackground
      source={require("./background.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registracija</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            placeholderTextColor="#fff"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={(event) => handleRegistration(event)} // Pass the event object
        >
          <Text style={styles.registerButtonText}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 38,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    width: "80%",
    height: 48,
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 24,
    backgroundColor: "transparent",
    fontSize: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#f9a826",
    width: "80%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    borderRadius: 24,
    elevation: 3,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default SignUp;

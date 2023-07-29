import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
} from "react-native";

const Registration = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = () => {
    fetch("https://example.com/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          navigation.navigate("Login");
        } else {
          alert("Registration failed");
        }
      })
      .catch((error) => {
        alert("An error occurred while registering");
      });
  };

  return (
    <ImageBackground
      source={require("./background.jpg")}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Registracija</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#fff"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#fff"
          secureTextEntry
        />
        <Button
          title="Registracija"
          style={styles.button}
          onPress={handleRegistration}
        />
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
    marginBottom: 48,
    color: "#fff",
    textAlign: "center",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: 48,
    padding: 12,
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 24,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#fff",
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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerButton: {
    backgroundColor: "transparent",
    width: "80%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#fff",
    elevation: 3,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
export default Registration;

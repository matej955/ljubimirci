import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  AppRegistry,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [errorCode, setErrorCode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const tryAutoLogin = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem("storedEmail");
        const storedPassword = await AsyncStorage.getItem("storedPassword");
        if (storedEmail && storedPassword) {
          setEmail(storedEmail);
          setPassword(storedPassword);
          // Avoid calling handleLogin() and navigation here
        }
      } catch (error) {
        console.log("Error reading stored credentials:", error);
      }
    };

    tryAutoLogin();

    console.log("Auto login successful");

    // After tryAutoLogin, perform navigation and login if needed
    if (email && password) {
      handleLogin();
      navigation.navigate("Pocetna");
    }
  }, []);

  const handleLogin = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);

      if (user) {
        console.log(user.user.uid);
        await AsyncStorage.setItem("storedEmail", email);
        await AsyncStorage.setItem("storedPassword", password);
        navigation.navigate("Pocetna");
      }
    } catch (error) {
      console.log("Error logging in:", error);
      setErrorCode(error.code);
      setErrorMessage(error.message);
    }
  };

  const handleGuestLogin = async () => {
    onPress = () => {
      navigation.navigate("Pocetna");
    };

    onPress();
  };
  const handleRegistration = () => {
    onPress = () => {
      navigation.navigate("Registracija");
    };

    onPress();
  };

  return (
    <ImageBackground
      source={require("./background.jpg")}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Dobrodošli na Ljubimirac!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholderTextColor="#fff"
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Prijava</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={handleRegistration}
        >
          <Text style={styles.registerButtonText}>Registracija</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleGuestLogin}>
          <Text style={styles.guestButton}>Prijavi se kao gost</Text>
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
  guestButton: {
    color: "#fff",
    marginTop: 16,
    width: "80%",
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
});

AppRegistry.registerComponent("LoginPage", () => LoginPage);

export default LoginPage;

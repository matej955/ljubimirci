import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigation } from "@react-navigation/native";

const SignUp = ({}) => {
  // const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigation();

  const checkIfUserExists = async (auth, email) => {
    try {
      await signInWithEmailAndPassword(auth, email, "temporary_password");
      return true; // User exists
    } catch (error) {
      // Handle specific error codes if needed
      if (error.code === "auth/user-not-found") {
        return false; // User does not exist
      }
      console.log("Error checking if user exists:", error);
      return true; // Treat other errors as if the user exists to prevent registration
    }
  };

  const handleRegistration = async () => {
    try {
      // Initialize Firebase auth
      const auth = getAuth();

      // Check if the user already exists
      const userExists = await checkIfUserExists(auth, email);

      if (userExists) {
        // Display an alert if the user already exists
        alert("Korisnik već postoji!");
      } else {
        // Create a new user if the user doesn't exist
        const user = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        if (user) {
          console.log(user.user.uid);
          alert("Uspješno ste se registrirali!");
          navigation.navigate("Prijava");
        }
      }
    } catch (error) {
      console.log(error);
    }

    if (email === "" || password === "") {
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
            color="#fff"
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#fff"
          />
        </View>
        <View style={styles.input}>
          <TextInput
            color="#fff"
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

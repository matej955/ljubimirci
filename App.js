import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage/homePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Prijava" component={Login} />
        <Stack.Screen name="Registracija" component={SignUp} />
        <Stack.Screen name="Pocetna" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

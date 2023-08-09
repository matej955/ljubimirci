import * as React from "react";
import Login from "./components/Login/login";
import SignUp from "./components/SignUp/signup";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./components/HomePage/homePage";
import Buy from "./components/Buy/buy";
import Sell from "./components/Sell/sell";
import Adopt from "./components/Adobt/adobt";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Prijava" component={Login} />
        <Stack.Screen name="Registracija" component={SignUp} />
        <Stack.Screen name="Pocetna" component={HomePage} />
        <Stack.Screen name="Kupi" component={Buy} />
        <Stack.Screen name="Prodaj" component={Sell} />
        <Stack.Screen name="Udomi" component={Adopt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

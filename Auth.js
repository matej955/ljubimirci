import React from "react";
import { View } from "react-native";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

const Auth = () => {
  return (
    <View style={styles.container}>
      <Login />
      <Registration />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default Auth;

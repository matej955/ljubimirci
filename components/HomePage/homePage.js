import React, { useState } from "react";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { colors } from "../../theme";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "@rneui/themed";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <ImageBackground source={require("./4.png")} style={styles.background}>
      <Image source={require("./sapica.png")} style={styles.logo} />
      <View style={styles.view}>
        <SearchBar
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "white",
            borderRightColor: "white",
            borderLeftColor: "white",
            borderTopColor: "white",
            borderWidth: 1,
            borderRadius: 22,
            width: "90%",
          }}
          inputContainerStyle={{
            borderRadius: 24,
            backgroundColor: "transparent",
            borderBottomColor: "white",
            borderTopColor: "white",
            borderRightColor: "white",
            borderLeftColor: "white",
          }}
          inputStyle={{ textAlign: "center" }}
          leftIconContainerStyle={{ color: "white" }}
          rightIconContainerStyle={{}}
          loadingProps={{}}
          onChangeText={(newVal) => setValue(newVal)}
          onClearText={() => console.log(onClearText())}
          placeholder="Pretraži"
          placeholderTextColor="white"
          cancelButtonTitle="Cancel"
          cancelButtonProps={{}}
          onCancel={() => console.log(onCancel())}
          searchIcon={{
            color: "white",
          }}
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
  logo: {
    width: 50,
    height: 50,
    position: "absolute",
    top: 30,
    left: 20,
  },
  view: {
    width: "100%",
    position: "absolute",
    top: 120,
    left: 20,
  },
});

export default HomePage;

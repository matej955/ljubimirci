import React, { useState } from "react";
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
import avatar from "./images/avatar.png";

const HomePage = () => {
  const [search, setSearch] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };

  const handleAvatarPress = () => {
    // Do something when the avatar is pressed
    console.log("Avatar Pressed");
  };

  const handleFilterSearchPress = () => {
    // Do something when the filter search button is pressed
    console.log("Filter Search Pressed");
  };

  return (
    <ImageBackground source={require("./4.png")} style={styles.background}>
      <Image source={require("./sapaBijela.png")} style={styles.logo} />
      <View style={styles.avatarContainer}>
        <TouchableOpacity onPress={handleAvatarPress}>
          <Image source={avatar} style={styles.avatar} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>LJUBIMIRCI</Text>
      <View style={styles.searchBar}>
        <View style={styles.searchBarContainer}>
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
            inputStyle={{ textAlign: "left", left: -45, fontSize: 24 }}
            leftIconContainerStyle={{ color: "white" }}
            rightIconContainerStyle={{}}
            loadingProps={{}}
            onChangeText={updateSearch}
            placeholder="Pretraži"
            placeholderTextColor="white"
            cancelButtonTitle="Cancel"
            cancelButtonProps={{}}
            onCancel={() => console.log("Search canceled")}
            searchIcon={{
              color: "white",
              size: 34,
              containerStyle: { right: -300 },
            }}
          />
        </View>
      </View>
      <View style={styles.izbornikContainer}>
        <TouchableOpacity style={styles.izbornik}>
          <ImageBackground
            source={require("./background.png")}
            style={styles.izbornikBackground}
          >
            <Text style={styles.izbornikText}>Pokloni/Prodaj</Text>
            <Image source={require("./1.png")} style={styles.izbornikLogo} />
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            fontWeight: "bold",
            top: 0,
          }}
        >
          Pronađi ljubimirca
        </Text>
      </View>
      <View style={styles.filterSearchContainer}>
        <TouchableOpacity
          style={styles.filterSearch}
          onPress={handleFilterSearchPress}
        >
          <Image source={require("./filter2.png")} style={styles.filter} />
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
  title: {
    fontSize: 26,
    position: "absolute",
    top: 58,
    left: 70,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  logo: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 58,
    left: 20,
  },
  searchBar: {
    width: "100%",
    position: "absolute",
    top: 120,
    left: 20,
    // overflow: "hidden",
  },
  izbornik: {
    width: "90%",
    height: 100,
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "flex-start",
  },
  izbornikText: {
    backgroundColor: "transparent",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    position: "absolute",
    top: 36,
    left: 20,
  },
  izbornikBackground: {
    borderRadius: 24,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  izbornikLogo: {
    width: "100%",
    height: 250,
    bottom: 0,
    overflow: "hidden",
  },
  filter: {
    width: 40,
    height: 40,
    position: "absolute",
    top: -36,
    right: 24,
  },
  avatar: {
    width: 40,
    height: 40,
  },
  filterSearch: {
    width: 40,
    height: 40,
    bottom: -36,
    left: 24,
  },
  searchBarContainer: {
    // backgroundColor: "red",
    width: "100%",
    // height: 48,
    // bottom: 100,
    // alignSelf: "center", // Center the search bar container horizontally
    position: "absolute",
    // top: 120,
    zIndex: 1, // Add zIndex to make sure the search bar is above other elements
  },
  avatarContainer: {
    width: 40,
    height: 40,
    // backgroundColor: "red",
    // alignSelf: "center", // Center the search bar container horizontally
    position: "absolute",
    top: 60,
    zIndex: 1,
    right: 20,
  },
  textContainer: {
    width: "70%",
    height: 40,
    // backgroundColor: "red",
    position: "absolute",
    left: 20,
    top: 400,
  },
  izbornikContainer: {
    width: "100%",
    height: 100,
    // backgroundColor: "red",
    position: "absolute",
    top: 204,
    left: 22,
    zIndex: 1,
  },
  filterSearchContainer: {
    width: 40,
    height: 40,
    // backgroundColor: "red",
    position: "absolute",
    right: 24,
    top: 400,
    // bottom: 454,
    // alignSelf: "center",
  },
});

export default HomePage;

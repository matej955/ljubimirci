import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "@rneui/themed";
import avatar from "./images/avatar.png";
import { useNavigation } from "@react-navigation/native";
import sapaBijela from "./images/sapaBijela.png";
import background from "./images/background.png";
import filter from "./images/filter2.png";
import mainBackground from "./images/4.png";
import animals from "./images/1.png";
import BottomPopup from "../PopUp/popUp";

const HomePage = () => {
  console.log("Inside home page");
  const navigation = useNavigation();
  const [showPopup, setShowPopup] = useState(false);

  const closePopup = () => {
    setShowPopup(false);
  };

  const handlePopupOptionPress = (optionName) => {
    closePopup();
    if (optionName === "Pokloni") {
      navigation.navigate("Pokloni");
    } else if (optionName === "Prodaj") {
      navigation.navigate("Prodaj");
    } else if (optionName === "Dating") {
      navigation.navigate("Dating");
    }
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
    <ImageBackground source={mainBackground} style={styles.background}>
      <Image source={sapaBijela} style={styles.logo} />
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
        <TouchableOpacity
          style={styles.izbornik}
          onPress={() => setShowPopup(true)}
        >
          <ImageBackground
            source={background}
            style={styles.izbornikBackground}
          >
            {showPopup && (
              <BottomPopup
                show={showPopup}
                title={"Odaberi Opciju"}
                animationType={"fade"}
                closePopup={closePopup}
                data={[
                  { id: 0, name: "Pokloni" },
                  { id: 1, name: "Prodaj" },
                  { id: 2, name: "Dating" },
                ]}
                handlePopupOptionPress={handlePopupOptionPress}
                haveOutsideTouch={true}
              />
            )}
            <Text style={styles.izbornikText}>Pokloni/Prodaj</Text>
            <Image source={animals} style={styles.izbornikLogo} />
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
          <Image source={filter} style={styles.filter} />
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
    width: "100%",
    position: "absolute",
    zIndex: 1,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    top: 60,
    zIndex: 1,
    right: 20,
  },
  textContainer: {
    width: "70%",
    height: 40,
    position: "absolute",
    left: 20,
    top: 400,
  },
  izbornikContainer: {
    width: "100%",
    height: 100,
    position: "absolute",
    top: 204,
    left: 22,
    zIndex: 1,
  },
  filterSearchContainer: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 24,
    top: 400,
  },
});

export default HomePage;

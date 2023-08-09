import React, { Component } from "react";
import {
  View,
  Text,
  Modal,
  Dimensions,
  Pressable,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
} from "react-native";
import background from "./images/2.png";

export default class BottomPopup extends Component {
  static defaultProps = {
    title: "",
    animationType: "slide",
    haveOutsideTouch: true,
    data: [],
    handlePopupOptionPress: () => {}, // Initialize the prop with an empty function
  };

  renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => this.props.handlePopupOptionPress(item.name)}
        style={{
          height: 60,
          justifyContent: "center",
          marginBottom: 10,
          borderRadius: 24,
          overflow: "hidden",
        }}
      >
        <ImageBackground source={background} style={styles.back}>
          <Text
            style={{
              fontSize: 25,
              marginLeft: 18,
              fontWeight: "normal",
              color: "white",
            }}
          >
            {item.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  renderContent = () => {
    const { data } = this.props;
    return (
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          renderItem={this.renderItem}
          extraData={data}
          keyExtractor={(item) => `key-${item.id}`}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
        />
      </View>
    );
  };

  render() {
    const { show, title, animationType, closePopup, haveOutsideTouch } =
      this.props;

    return (
      <Modal
        animationType={animationType}
        transparent={true}
        visible={show}
        onRequestClose={() => {}}
      >
        <View style={{ flex: 1, backgroundColor: "#000000AA" }}>
          <Pressable
            onPress={() => {
              if (!haveOutsideTouch) return;
              closePopup();
            }}
            style={{ flex: 1 }}
          ></Pressable>
          <View
            style={{
              bottom: 300,
              position: "absolute",
              width: "80%",
              backgroundColor: "transparent",
              borderRadius: 24,
              left: 40,
              height: Dimensions.get("window").height * 0.4,
              maxHeight: Dimensions.get("window").height * 0.4,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 20,
                fontWeight: "500",
                margin: 15,
              }}
            >
              {title}
            </Text>
            {this.renderContent()}
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  back: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    borderRadius: 24,
  },
});

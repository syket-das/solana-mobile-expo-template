import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import ForceTopTab from "../components/force/ForceTopTab";
import NavBar from "../components/global/Navbar";

const ForceScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background-layer.jpg")}
        style={styles.bgImage}
      >
        <NavBar />
        <ForceTopTab />
      </ImageBackground>
    </View>
  );
};

export default ForceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
});

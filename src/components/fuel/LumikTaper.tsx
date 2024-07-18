import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const LumikTaper = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: "center",
      }}
    >
      <View>
        <View style={styles.gameBtn}>
          <Image
            source={require("../../assets/img/fuel/auto-miner.png")}
            style={{ width: 45, height: 45 }}
          />
        </View>
      </View>
      <Text
        style={{
          color: "#6CF926",
          textAlign: "center",
          marginTop: 10,
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        LUMIK TAPER
      </Text>
      <Text
        style={{
          color: "#FFFFFF",
          textAlign: "center",
          marginTop: 10,
          fontSize: 18,
          maxWidth: 300,
        }}
      >
        Would you like to automate your Lumik points earning? Click the button
        below to mint this NFT and enjoy automated Lumik points earning 24/7 for
        a lifetime.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 15,
          marginTop: 20,
        }}
      >
        <TouchableHighlight onPress={() => console.log("rock")}>
          <View style={styles.CTABtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>GO</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => console.log("rock")}>
          <View style={styles.CTABtn}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>CHECK</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LumikTaper;

const styles = StyleSheet.create({
  gameBtn: {
    backgroundColor: "#1E3B10",
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  CTABtn: {
    backgroundColor: "#1E3B10",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

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
import { globalStyles } from "../../styles/globalStyles";

const LumikTaper = () => {
  return (
    <View
      style={{
        marginTop: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <View style={globalStyles.bottomSheetImageContainer}>
          <Image
            source={require("../../assets/img/fuel/auto-miner.png")}
            style={globalStyles.bottomSheetImage}
          />
        </View>
      </View>
      <Text style={globalStyles.bottomSheetTitle}>LUMIK TAPER</Text>
      <Text style={globalStyles.bottomSheetSubTitle}>
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
  CTABtn: {
    backgroundColor: "#1E3B10",
    borderWidth: 1,
    borderColor: "#6CF92675",
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

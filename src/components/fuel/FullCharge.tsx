import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { globalStyles } from "../../styles/globalStyles";

const FullCharge = () => {
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
            source={require("../../assets/img/fuel/full-charge.png")}
            style={globalStyles.bottomSheetImage}
          />
        </View>
      </View>
      <Text style={globalStyles.bottomSheetTitle}>FULL CHARGE</Text>
      <Text style={globalStyles.bottomSheetSubTitle}>
        To fully charge your battery instantly, please click the button below
        and watch the entire ad without skipping.{" "}
      </Text>

      <TouchableHighlight onPress={() => console.log("rock")}>
        <View style={styles.adBtn}>
          <Image
            source={require("../../assets/img/fuel/watch-ad.png")}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: "#fff" }}>WATCH AD</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default FullCharge;

const styles = StyleSheet.create({
  adBtn: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: "#1E3B10",
    borderColor: "#FFCC00",
    borderWidth: 0.5,
    borderRadius: 6,
  },
});

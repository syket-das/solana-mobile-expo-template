import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useState } from "react";
import useHomeStore from "../../store/homeStore";
import { globalStyles } from "../../styles/globalStyles";
import LudoImage from "../../assets/img/home/ludo.png";
import PadLockImage from "../../assets/img/saga/padlock.png";

const LudoModeModalComponent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { mode, setModeToBoss }: any = useHomeStore((state) => state);

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
          <Image source={LudoImage} style={globalStyles.bottomSheetImage} />
        </View>
      </View>
      <Text style={globalStyles.bottomSheetTitle}>LUDO -- MONEYBANK</Text>
      <Text style={globalStyles.bottomSheetSubTitle}>
        Experience Ludo moneyBank: a Web3.0 Play-to-Earn game with Azameina
        token and NFT integration. Enjoy Indie and Tournament modes for
        entertainment and financial rewards.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 15,
          marginTop: 20,
        }}
      >
        <TouchableHighlight onPress={() => {}}>
          <View style={styles.CTABtn}>
            <Image source={PadLockImage} style={{ width: 20, height: 20 }} />
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
              }}
            >
              LOCKED
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LudoModeModalComponent;

const styles = StyleSheet.create({
  CTABtn: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
    backgroundColor: "#1E3B10",
    borderRadius: 4,
    borderColor: "#FFCC00",
    borderWidth: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 4,
    paddingRight: 10,
  },
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import useHomeStore from "../../store/homeStore";
import { globalStyles } from "../../styles/globalStyles";
import BossCoin from "../../assets/img/home/boss.png";

const BossModeModalContent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { mode, setModeToBoss }: any = useHomeStore((state) => state);

  return (
    <View
      style={{
        marginTop: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <View>
        <View>
          <View style={styles.bottomSheetImageContainer}>
            <Image source={BossCoin} style={styles.bottomSheetImage} />
          </View>
        </View>
      </View>
      <Text style={styles.bottomSheetTitle}>BOSS MODE</Text>
      <Text style={styles.bottomSheetSubTitle}>
        Battery draining so fast right? Want it to last for{" "}
        <Text style={{ color: "#FFCC00" }}>10 hours</Text> while earning Lumik
        points effortlessly? Click below to mint this NFT and enjoy an{" "}
        <Text style={{ color: "#FFCC00" }}>10 hour </Text>
        infinite battery limit daily, for a lifetime.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          columnGap: 15,
          marginTop: 12,
        }}
      >
        {!isVerified && (
          <TouchableOpacity onPress={() => console.log("rock")}>
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: "#fff",
                  ...globalStyles.globalFont,
                }}
              >
                GO
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {!isVerified && (
          <TouchableOpacity onPress={() => setIsVerified(true)}>
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: "#fff",
                  ...globalStyles.globalFont,
                }}
              >
                CHECK
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {isVerified && (
          <TouchableOpacity
            onPress={() => {
              setModeToBoss();
            }}
          >
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: "#fff",
                  ...globalStyles.globalFont,
                  fontSize: 20,
                }}
              >
                START
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default BossModeModalContent;

const styles = StyleSheet.create({
  adBtn: {
    backgroundColor: "#FFCC0020",
    borderColor: "#FFCC0050",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  bottomSheetImage: {
    width: 50,
    height: 50,
  },
  bottomSheetImageContainer: {
    height: 69,
    width: 69,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#FFCC0020",
    borderColor: "#FFCC0050",
    borderWidth: 1,
  },
  bottomSheetTitle: {
    color: "#FFCC00",
    textAlign: "center",
    fontSize: 24,
    marginTop: 12,
    fontFamily: "Iceland-Regular",
  },
  bottomSheetSubTitle: {
    marginTop: 10,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    maxWidth: 300,
    fontFamily: "Iceland-Regular",
    lineHeight: 24,
    width: 296,
  },
});

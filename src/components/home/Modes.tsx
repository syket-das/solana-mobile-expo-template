import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useRef } from "react";
import useHomeStore from "../../store/homeStore";
import CustomBottomSheet from "../global/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { globalStyles } from "../../styles/globalStyles";

const Modes = ({
  bottomSheetRef,
  ludoBottomSheetRef,
}: {
  bottomSheetRef: React.RefObject<BottomSheet>;
  ludoBottomSheetRef: React.RefObject<BottomSheet>;
}) => {
  const { setModeToGame, mode }: any = useHomeStore((state) => state);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();

  const handleLudoOpenPress = () => ludoBottomSheetRef.current?.expand();
  const handleLudoClosePress = () => ludoBottomSheetRef.current?.close();

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 12,
        marginTop: 10,
      }}
    >
      <TouchableHighlight onPress={() => setModeToGame()}>
        <View
          style={[
            styles.gameBtn,
            {
              borderWidth: mode === "game" ? 1 : 0,
              borderColor: mode === "game" ? "#6CF92625" : "transparent",
            },
          ]}
        >
          <Image
            source={require("../../assets/img/home/mine-coin.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            GAME
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleOpenPress()}>
        <View
          style={[
            styles.bossBtn,
            {
              borderWidth: mode === "boss" ? 1 : 0,
              borderColor: mode === "boss" ? "#FFCC0075" : "transparent",
            },
          ]}
        >
          <Image
            source={require("../../assets/img/home/boss.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: "#FFCC00", ...styles.btnLabel }}>BOSS</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleLudoOpenPress()}>
        <View style={styles.gameBtn}>
          <Image
            source={require("../../assets/img/home/ludo.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            LUDU
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Modes;

const styles = StyleSheet.create({
  gameBtn: {
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  bossBtn: {
    backgroundColor: "#FFCC0012",
    borderRadius: 10,
    flexDirection: "column",
    gap: 4,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  btnLabel: {
    fontSize: 18,
    ...globalStyles.globalFont,
  },
});

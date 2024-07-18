import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef, useState } from "react";
import GameCoin from "../components/home/GameCoin";
import useHomeStore from "../store/homeStore";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../components/global/CustomBottomSheet";
import Modes from "../components/home/Modes";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import BossModeModalContent from "../components/home/BossModeModalContent";
import useAuthStore from "../store/authStore";
import useReferralStore from "../store/referralStore";
import Lifeline from "../components/home/Lifeline";
import { alertAndLog } from "../utils/alertAndLog";
import { globalStyles } from "../styles/globalStyles";
import LudoModeModalComponent from "../components/home/LudoModalComponent";
import NavBar from "../components/global/Navbar";

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { user }: any = useAuthStore((state) => state);
  const { error: referralError, createReferral }: any = useReferralStore(
    (state) => state
  );
  const { mode }: any = useHomeStore((state) => state);

  const [code, setCode] = useState("");

  const bottomSheetRef = useRef<BottomSheet>(null);
  const modeBottomSheetRef = useRef<BottomSheet>(null);
  const ludoBottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = useCallback(
    () => bottomSheetRef.current?.expand(),
    []
  );

  const handleClosePress = useCallback(
    () => bottomSheetRef.current?.close(),
    []
  );

  const openSheet = () => {
    setTimeout(() => {
      handleOpenPress();
    }, 500);
  };

  useEffect(() => {
    if (!user?.referredBy) {
      openSheet();
    }
  }, [isFocused]);

  const submitReferral = async () => {
    try {
      if (!code) {
        return alertAndLog("Error", "Please enter a referral code");
      }

      await createReferral(code);
      navigation.navigate("Auth");
    } catch (error: any) {
      alertAndLog("Error", error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/img/background-layer.jpg")}
          style={styles.bgImage}
        >
          <NavBar />
          <GameCoin />
          {mode === "game" && (
            <ImageBackground
              source={require("../assets/img/intersection.png")}
              style={{
                width: "100%",
                justifyContent: "center",
                flexDirection: "row",
                columnGap: 10,
                alignItems: "center",
                paddingVertical: 5,
              }}
            >
              <Image
                source={require("../assets/img/home/rock.png")}
                style={{ width: 40, height: 40 }}
              />
              <Text
                style={{
                  color: "#fff",
                  ...globalStyles.globalFont,
                  fontSize: 28,
                }}
              >
                ROCK
              </Text>
            </ImageBackground>
          )}
          {mode === "boss" && (
            <Text
              style={{
                color: "#FFCC00",
                ...globalStyles.globalFont,
                alignSelf: "center",
                fontSize: 20,
                marginBottom: 20,
              }}
            >
              10:00:00
            </Text>
          )}

          <Modes
            bottomSheetRef={modeBottomSheetRef}
            ludoBottomSheetRef={ludoBottomSheetRef}
          />
          <Lifeline />

          {/* <BottomTabNav /> */}

          <CustomBottomSheet ref={bottomSheetRef}>
            <View
              style={{
                alignSelf: "center",
              }}
            >
              <View
                style={{
                  alignSelf: "center",
                  marginBottom: 20,
                  padding: 0,
                  backgroundColor: "#1E3B10",
                  borderRadius: 10,
                }}
              >
                <Image
                  source={require("../assets/img/home/referral-code.png")}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>

              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "600",
                  color: "#6CF926",
                  ...globalStyles.globalFont,
                  alignSelf: "center",
                }}
              >
                ENTER YOUR INVITE CODE
              </Text>
              <Text
                style={{
                  color: "#fff",
                  maxWidth: "80%",
                  textAlign: "center",
                  marginTop: 10,
                  fontSize: 18,
                  lineHeight: 20,
                  ...globalStyles.globalFont,
                }}
              >
                Please enter your invite code to continue and play the game. An
                invite code is required to access the game.
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 40,
                  backgroundColor: "#383C1C",
                  width: "80%",
                  borderRadius: 10,
                  borderColor: "#FFCC00",
                  borderWidth: 1,
                }}
              >
                <TextInput
                  placeholder="Enter code"
                  placeholderTextColor="#ccc"
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    flex: 1,
                    color: "#fff",
                    ...globalStyles.globalFont,
                  }}
                  value={code}
                  onChangeText={(text) => setCode(text)}
                />
                <TouchableHighlight
                  onPress={submitReferral}
                  style={{
                    backgroundColor: "#FFCC00",
                    // borderRadius: 10,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#000",
                      padding: 10,
                      alignItems: "center",
                      marginTop: 8,
                      fontWeight: "600",
                      ...globalStyles.globalFont,
                    }}
                  >
                    CONTINUE
                  </Text>
                </TouchableHighlight>
              </View>

              <Text
                style={{
                  color: "red",
                  marginTop: 20,
                  alignSelf: "center",
                }}
              >
                {referralError}
              </Text>
            </View>
          </CustomBottomSheet>
          <CustomBottomSheet ref={modeBottomSheetRef} closable>
            <BossModeModalContent />
          </CustomBottomSheet>

          <CustomBottomSheet ref={ludoBottomSheetRef} closable>
            <LudoModeModalComponent />
          </CustomBottomSheet>
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  gcCOntainer: {},
  gameBtn: {
    backgroundColor: "#1E3B10",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  bossBtn: {
    backgroundColor: "#282209",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});

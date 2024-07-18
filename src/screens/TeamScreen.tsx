import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BottomTabNav from "../components/global/BottomTabNav";
import useAuthStore from "../store/authStore";
import * as Clipboard from "expo-clipboard";
import { globalStyles } from "../styles/globalStyles";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import useUserStore from "../store/userStore";
import NavBar from "../components/global/Navbar";
import Rank1 from "../assets/img/rank/1.png";
import StatCard from "../components/global/StatCard";

const TeamScreen = () => {
  const { user, error, getUserProfile }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
  };
  const modeBottomSheetRef = React.useRef<BottomSheet>(null);
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = async (str: any) => {
    await Clipboard.setStringAsync(str);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background-layer.jpg")}
        style={styles.bgImage}
      >
        <NavBar />

        <ScrollView
          style={{
            paddingHorizontal: 15,
            marginTop: 28,
            maxHeight: "70%",
          }}
        >
          <View style={globalStyles.tabContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#6CF92625",
                borderRadius: 5,
                padding: 5,
                gap: 4,
              }}
            >
              <Image
                source={require("../assets/img/saga/your-team.png")}
                style={{ width: 17, height: 17 }}
              />
              <Text
                style={{
                  color: "#6CF926",
                  fontSize: 20,
                  ...globalStyles.globalFont,
                }}
              >
                YOUR TEAM
              </Text>
            </View>
          </View>

          {user && user.referrals.length === 0 && (
            <View
              style={{
                width: "100%",
                backgroundColor: "#6CF92612",
                borderRadius: 10,
                borderColor: "#6CF92625",
                borderWidth: 1,
                paddingVertical: 22,
                paddingHorizontal: "auto",
                marginTop: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{ color: "#6CF926", ...globalStyles.cardTitleText }}
                >
                  NO TEAM MEMBERS
                </Text>
              </View>
            </View>
          )}

          {user &&
            user.referrals.map((referral: any) => (
              <View>
                <StatCard
                  isClickable={false}
                  cardTitle="STEVE JOBS 2"
                  cardImage={Rank1}
                  cardSubTitle={
                    <View style={styles.cardSubTitleContainer}>
                      <Image
                        source={require("../assets/img/home/gcwg.png")}
                        style={styles.cardSubTitleImage}
                      />

                      <Text style={styles.cardSubTitle}>500</Text>
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        | TEAM 1100K
                      </Text>
                    </View>
                  }
                />
              </View>
            ))}
        </ScrollView>

        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  cardSubTitleContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
  cardSubTitleImage: {
    width: 20,
    height: 20,
  },
  cardSubTitle: {
    color: "#fff",
    ...globalStyles.cardSubTitleText,
  },
});

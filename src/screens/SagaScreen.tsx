import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import useAuthStore from "../store/authStore";
import * as Clipboard from "expo-clipboard";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";
import CustomBottomSheet from "../components/global/CustomBottomSheet";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import InviteCodeModalContent from "../components/saga/InviteCodeModalContent";
import { useNavigation } from "@react-navigation/native";
import useUserStore from "../store/userStore";
import NavBar from "../components/global/Navbar";
import StatCard from "../components/global/StatCard";
import ReferralImage from "../assets/img/home/referral-code.png";
import YourTeamImage from "../assets/img/saga/your-team.png";
import PlatinumLeagueImage from "../assets/img/global/league/platinum.png";
import RankImage from "../assets/img/saga/your-rank.png";
import ReferralEarningsImage from "../assets/img/saga/your-referrals.png";
import TokenMinedImage from "../assets/img/saga/token-mined.png";
import LPBoosterImage from "../assets/img/saga/lp-on-boosters.png";
import BotImage from "../assets/img/fuel/auto-miner.png";
import BoosCoinImage from "../assets/img/home/boss.png";
import LogoutImage from "../assets/img/saga/padlock.png";

const SagaScreen = () => {
  const { user, error, getUserProfile }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  const modeBottomSheetRef = React.useRef<BottomSheet>(null);
  const [copiedText, setCopiedText] = useState("");
  const navigation = useNavigation();

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
        <View style={{ paddingHorizontal: 15, marginTop: 28 }}>
          <View style={{ marginBottom: 16, ...globalStyles.tabContainer }}>
            <View style={styles.tabContentContainer}>
              <Image
                source={require("../assets/img/saga/stats.png")}
                style={{ width: 20, height: 20 }}
              />
              <Text
                style={{
                  color: "#6CF926",
                  fontSize: 20,
                  ...globalStyles.globalFont,
                }}
              >
                YOUR STATS
              </Text>
            </View>
          </View>
          <ScrollView
            style={{
              height: "65%",
            }}
          >
            <View
              style={{
                width: "100%",
                rowGap: 16,
              }}
            >
              <StatCard
                isClickable
                onPress={() => modeBottomSheetRef.current?.expand()}
                cardTitle="YOUR INVITE CODE"
                cardImage={ReferralImage}
                cardSubTitle={
                  <Text
                    style={{
                      color: "#fff",
                      ...globalStyles.cardSubTitleText,
                    }}
                  >
                    {user?.referralCode}
                  </Text>
                }
              />
              <StatCard
                isClickable
                onPress={() => navigation.navigate("Team")}
                cardTitle="YOUR TEAM"
                cardImage={YourTeamImage}
                cardSubTitle={
                  <Text
                    style={{
                      color: "#fff",
                      ...globalStyles.cardSubTitleText,
                    }}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      {user?.referrals?.length || 0}
                    </Text>
                  </Text>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle={
                  <Text style={globalStyles.cardTitleText}>
                    YOUR MASTER | {user?.referredBy.userId.slice(0, 5)}
                  </Text>
                }
                cardImage={PlatinumLeagueImage}
                cardSubTitle={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      TEAM SIZE
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      500 |{" "}
                    </Text>

                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      TEAM SIZE
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      500
                    </Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="YOUR RANK"
                cardImage={RankImage}
                cardSubTitle={
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 4,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      LEAGUE
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      DIAMOND |{" "}
                    </Text>

                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      RANK
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      50000
                    </Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="REFERRAL EARNINGS"
                cardImage={ReferralEarningsImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/home/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>500000</Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="YOU MINED SO FAR"
                cardImage={TokenMinedImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/home/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>500000</Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="LP SPENDS ON BOOSTERS"
                cardImage={LPBoosterImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/home/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>500000</Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="LUMIK TAPPER LP EARNING"
                cardImage={BotImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/home/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>500000</Text>
                  </View>
                }
              />
              <StatCard
                isClickable={false}
                cardTitle="BOSS MODE LP EARNING"
                cardImage={BoosCoinImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/home/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>500000</Text>
                  </View>
                }
              />
              <StatCard
                isClickable
                onPress={() => console.log("Logging out")}
                cardTitle="LOGOUT"
                cardImage={LogoutImage}
              />
            </View>
          </ScrollView>
        </View>

        {/* <BottomTabNav /> */}
      </ImageBackground>

      <CustomBottomSheet ref={modeBottomSheetRef} closable>
        <InviteCodeModalContent />
      </CustomBottomSheet>
    </View>
  );
};

export default SagaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  tabContentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#6CF92625",
    borderRadius: 5,
    padding: 5,
    gap: 4,
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

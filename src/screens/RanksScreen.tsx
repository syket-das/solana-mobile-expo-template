import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import CoinContainer from "../components/global/CoinContainer";
import BottomTabNav from "../components/global/BottomTabNav";
import ForceTopTab from "../components/force/ForceTopTab";
import RanksTopTab from "../components/ranks/RanksTopTab";
import { globalStyles } from "../styles/globalStyles";
import useStatsStore from "../store/statsStore";

const RanksScreen = () => {
  const { stats, error, getStats }: any = useStatsStore((state) => state);

  const fetchStats = async () => {
    await getStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background-image.png")}
        style={styles.bgImage}
      >
        {/* <TopBarWalletMenu /> */}
        <Image
          source={require("../assets/img/home/text-logo.png")}
          style={{
            width: "40%",
            height: 30,
            alignSelf: "center",
            marginTop: 10,
            objectFit: "contain",
          }}
        />
        <CoinContainer />
        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Text style={styles.titleText}>GAME STATS</Text>

          <TouchableOpacity onPress={() => {}} style={styles.contentContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../assets/img/rank/total-players.png")}
                style={{ width: 45, height: 45 }}
              />
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <Text style={styles.cardTitleText}>TOTAL PLAYERS</Text>
                <Text style={styles.cardSubTitleText}>{stats?.users ?? 0}</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.contentContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../assets/img/rank/game.png")}
                style={{ width: 45, height: 45 }}
              />
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <Text style={styles.cardTitleText}>DAILY ACTIVE PLAYERS</Text>
                <Text style={styles.cardSubTitleText}>
                  {stats?.dailyActiveUsers ?? 0}
                </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => {}} style={styles.contentContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../assets/img/rank/current-online-players.png")}
                style={{ width: 45, height: 45 }}
              />
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <Text style={styles.cardTitleText}>CURRENT ONLINE PLAYERS</Text>
                <Text style={styles.cardSubTitleText}>
                  {stats?.activeUsers ?? 0}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <Text style={styles.titleText}>RANKINGS</Text>
          <RanksTopTab />
        </View>
        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default RanksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contentContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#16270D",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  titleText: {
    fontSize: 24,
    color: "#52F81A",
    ...globalStyles.globalFont,
  },
  cardTitleText: {
    color: "#6CF926",
    ...globalStyles.globalFont,
    fontSize: 18,
  },
  cardSubTitleText: {
    color: "#fff",
    fontSize: 16,
    ...globalStyles.globalFont,
  },
});

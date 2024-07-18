import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import BottomTabNav from "../components/global/BottomTabNav";
import { globalStyles } from "../styles/globalStyles";
import NavBar from "../components/global/Navbar";
import CoinImage from "../assets/img/global/gcwg.png";
import StatCard from "../components/global/StatCard";

const Web3PassScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/img/background-layer.jpg")}
        style={styles.bgImage}
      >
        <NavBar />

        <View
          style={{
            paddingHorizontal: 15,
            marginTop: 28,
          }}
        >
          <Text
            style={{
              color: "#6CF926",
              fontSize: 24,
              ...globalStyles.globalFont,
            }}
          >
            WEB3 PASS
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              ...globalStyles.globalFont,
              marginVertical: 10,
            }}
          >
            We assume you've already connected your SOLANA wallet upon logging
            in. To boost your chances of receiving the $INA token airdrop. We
            recommend Minting or Buying Azameina NFT. This NFT is a P2E pass,
            allowing you to earn $INA tokens in the game. Learn more at
            https://example.com
          </Text>

          <StatCard
            isClickable={false}
            cardTitle="LUMIK POINT REWARDS"
            cardImage={CoinImage}
            cardSubTitle={
              <Text style={{ color: "#fff", ...globalStyles.cardSubTitleText }}>
                500
              </Text>
            }
          />

          <Text
            style={{
              color: "#6CF926",
              fontSize: 24,
              marginTop: 20,
              ...globalStyles.globalFont,
            }}
          >
            YOUR TASKS'S
          </Text>

          <ScrollView
            style={{
              marginTop: 16,
              height: "45%",
            }}
          >
            <View
              style={{
                width: "100%",
                rowGap: 16,
              }}
            >
              <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
                <View style={styles.cardContentStyle}>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardTitleText,
                      }}
                    >
                      CONNECT SOLANA WALLET
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 4,
                      }}
                    >
                      <Image
                        source={require("../assets/img/global/gcwg.png")}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: "#fff",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        GO
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        CHECK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
                <View style={styles.cardContentStyle}>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardTitleText,
                      }}
                    >
                      BUY AZAMEINA NFT
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 4,
                      }}
                    >
                      <Image
                        source={require("../assets/img/global/gcwg.png")}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: "#fff",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        GO
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        CHECK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
                <View style={styles.cardContentStyle}>
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 2,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardTitleText,
                      }}
                    >
                      BUY LUMIK TAPPER NFT
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        columnGap: 4,
                      }}
                    >
                      <Image
                        source={require("../assets/img/global/gcwg.png")}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: "#fff",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 10,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        GO
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {}}
                      style={styles.cardButtonStyle}
                    >
                      <Text
                        style={{
                          color: "#6CF926",
                          ...globalStyles.cardSubTitleText,
                        }}
                      >
                        CHECK
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <BottomTabNav />
    </View>
  );
};

export default Web3PassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    borderColor: "#6CF92625",
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardContentStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardButtonStyle: {
    backgroundColor: "#6CF92612",
    borderRadius: 6,
    borderColor: "#6CF92625",
    borderWidth: 1,
    paddingVertical: 4,
    paddingHorizontal: 6,
  },
});

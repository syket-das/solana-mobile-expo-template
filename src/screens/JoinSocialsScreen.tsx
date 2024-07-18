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

const JoinSocialsScreen = () => {
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
            JOIN OUR SOCIALS
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 18,
              ...globalStyles.globalFont,
              marginVertical: 10,
            }}
          >
            To be eligible for airdrop distribution, joining our social media
            platforms is required. We regularly share important updates on these
            channels. Complete all the tasks below [Join Socials] to receive
            your lumik points rewards.
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
              maxHeight: "62%",
            }}
          >
            <View
              style={{
                width: "100%",
                rowGap: 16,
              }}
            >
              <View style={styles.cardContainer}>
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
                      LIKE THIS POST ON X
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
              </View>
              <View style={styles.cardContainer}>
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
                      QUOTE THIS POST ON X
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
              </View>
              <View style={styles.cardContainer}>
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
                      REPOST THIS POST ON X
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
              </View>
              <View style={styles.cardContainer}>
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
                      SHARE APP ON WHATSAPP
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
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <BottomTabNav />
    </View>
  );
};

export default JoinSocialsScreen;

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

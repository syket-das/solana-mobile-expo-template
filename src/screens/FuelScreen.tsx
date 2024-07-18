import React, { useRef, useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import useHomeStore from "../store/homeStore";
import CustomBottomSheet from "../components/global/CustomBottomSheet";
import FullCharge from "../components/fuel/FullCharge";
import LumikTaper from "../components/fuel/LumikTaper";
import Multiplier from "../components/fuel/Multiplier";
import EnergyCapacity from "../components/fuel/EnergyCapacity";
import FuelSpeed from "../components/fuel/FuelSpeed";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { globalStyles } from "../styles/globalStyles";
import NavBar from "../components/global/Navbar";
import StatCard from "../components/global/StatCard";
import AutoMiner from "../assets/img/fuel/auto-miner.png";
import MultiPlayer from "../assets/img/fuel/multiplier.png";
import EnergyCapacityImage from "../assets/img/fuel/energy-capacity.png";
import FuelSpeedImage from "../assets/img/fuel/fuel-speed.png";
import BottomTabNav from "../components/global/BottomTabNav";

const FuelScreen = () => {
  const { points }: any = useHomeStore((state) => state);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const [key, setKey] = useState<string | null>(null);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/img/background-layer.jpg")}
          style={styles.bgImage}
        >
          <NavBar />
          <View
            style={{
              marginTop: 28,
              paddingHorizontal: 15,
            }}
          >
            <Text style={styles.titleText}>POWER UPS</Text>

            <View
              style={{
                width: "100%",
                rowGap: 16,
                marginTop: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setKey("full-charge");
                  handleOpenPress();
                }}
                style={globalStyles.cardContainer}
              >
                <View style={globalStyles.cardContentStyle}>
                  <Image
                    source={require("../assets/img/fuel/full-charge.png")}
                    style={globalStyles.cardImage}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      alignItems: "flex-start",
                      gap: 1,
                    }}
                  >
                    <Text
                      style={{
                        color: "#6CF926",
                        ...globalStyles.cardTitleText,
                      }}
                    >
                      FULL CHARGE
                    </Text>
                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      21/22
                    </Text>
                  </View>
                </View>
                <Text
                  style={{
                    color: "#FFFFFF",
                    ...globalStyles.cardSubTitleText,
                    paddingTop: 16,
                  }}
                >
                  00:14:36
                </Text>
              </TouchableOpacity>
              <StatCard
                isClickable={true}
                onPress={() => {
                  setKey("lumik-taper");
                  handleOpenPress();
                }}
                cardTitle="LUMIK TAPER"
                cardImage={AutoMiner}
                cardSubTitle={
                  <Text
                    style={{
                      color: "#fff",
                      ...globalStyles.cardSubTitleText,
                    }}
                  >
                    1/1
                  </Text>
                }
              />
            </View>
          </View>

          <View
            style={{
              marginTop: 18,
              paddingHorizontal: 15,
            }}
          >
            <Text style={styles.titleText}>BOOSTERS</Text>
            <View
              style={{
                width: "100%",
                rowGap: 16,
                marginTop: 16,
              }}
            >
              <StatCard
                isClickable={true}
                onPress={() => {
                  setKey("multiplier");
                  handleOpenPress();
                }}
                cardTitle="MULTIPLIER"
                cardImage={MultiPlayer}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/global/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      500
                    </Text>
                    <Text
                      style={{
                        color: "#6CF926",
                        ...styles.cardSubTitle,
                      }}
                    >
                      | LVL 1
                    </Text>
                  </View>
                }
              />
              <StatCard
                isClickable={true}
                onPress={() => {
                  setKey("energy-capacity");
                  handleOpenPress();
                }}
                cardTitle="ENERGY CAPACITY"
                cardImage={EnergyCapacityImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/global/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      500
                    </Text>
                    <Text
                      style={{
                        color: "#6CF926",
                        ...styles.cardSubTitle,
                      }}
                    >
                      | LVL 1
                    </Text>
                  </View>
                }
              />
              <StatCard
                isClickable={true}
                onPress={() => {
                  setKey("fuel-speed");
                  handleOpenPress();
                }}
                cardTitle="FUEL SPEED"
                cardImage={FuelSpeedImage}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require("../assets/img/global/gcwg.png")}
                      style={styles.cardSubTitleImage}
                    />

                    <Text
                      style={{
                        color: "#fff",
                        ...globalStyles.cardSubTitleText,
                      }}
                    >
                      500
                    </Text>
                    <Text
                      style={{
                        color: "#6CF926",
                        ...styles.cardSubTitle,
                      }}
                    >
                      | LVL 1
                    </Text>
                  </View>
                }
              />
            </View>
          </View>

          <BottomTabNav />
        </ImageBackground>
        <CustomBottomSheet ref={bottomSheetRef} closable>
          {key === "full-charge" ? (
            <FullCharge />
          ) : key === "lumik-taper" ? (
            <LumikTaper />
          ) : key === "multiplier" ? (
            <Multiplier />
          ) : key === "energy-capacity" ? (
            <EnergyCapacity />
          ) : key === "fuel-speed" ? (
            <FuelSpeed />
          ) : null}
        </CustomBottomSheet>
      </View>
    </>
  );
};

export default FuelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },

  gcCOntainer: {},

  titleText: {
    fontSize: 24,
    color: "#6CF926",
    ...globalStyles.globalFont,
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
    ...globalStyles.cardSubTitleText,
  },
});

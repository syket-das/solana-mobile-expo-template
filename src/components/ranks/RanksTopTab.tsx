import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";

const RanksTopTab = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("top");

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View style={styles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelected("top")}
          style={{
            backgroundColor: selected === "top" ? "#006600" : "transparent",
            ...styles.tabContentContainer,
          }}
        >
          <Image
            source={require("../../assets/img/rank/top-players.png")}
            style={{ width: 17, height: 17 }}
          />
          <Text style={styles.tabTitle}>TOP 1111</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("standing")}
          style={{
            backgroundColor:
              selected === "standing" ? "#006600" : "transparent",
            ...styles.tabContentContainer,
          }}
        >
          <Image
            source={require("../../assets/img/rank/standings.png")}
            style={{ width: 17, height: 17 }}
          />
          <Text style={styles.tabTitle}>STANDINGS</Text>
        </TouchableOpacity>
      </View>

      {selected === "top" ? (
        <ScrollView
          style={{
            height: "40%",
          }}
        >
          <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../../assets/img/rank/1.png")}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ marginLeft: 4 }}>
                <Text style={styles.cardTitleText}>STEVE JOBS 2</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 4,
                  }}
                >
                  <Image
                    source={require("../../assets/img/home/gcwg.png")}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text style={{ color: "#fff", ...styles.cardSubTitleText }}>
                    500000
                  </Text>
                  <Text
                    style={{ color: "#6CF926", ...styles.cardSubTitleText }}
                  >
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../../assets/img/rank/1.png")}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ marginLeft: 4 }}>
                <Text style={styles.cardTitleText}>STEVE JOBS 2</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 4,
                  }}
                >
                  <Image
                    source={require("../../assets/img/home/gcwg.png")}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text style={{ color: "#fff", ...styles.cardSubTitleText }}>
                    500000
                  </Text>
                  <Text
                    style={{ color: "#6CF926", ...styles.cardSubTitleText }}
                  >
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : selected === "standing" ? (
        <ScrollView
          style={{
            height: "40%",
          }}
        >
          <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Image
                source={require("../../assets/img/rank/1.png")}
                style={{ width: 40, height: 40 }}
              />
              <View style={{ marginLeft: 4 }}>
                <Text style={styles.cardTitleText}>STEVE JOBS</Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    columnGap: 4,
                  }}
                >
                  <Image
                    source={require("../../assets/img/home/gcwg.png")}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text style={{ color: "#fff", ...styles.cardSubTitleText }}>
                    500000
                  </Text>
                  <Text
                    style={{ color: "#6CF926", ...styles.cardSubTitleText }}
                  >
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default RanksTopTab;

const styles = StyleSheet.create({
  tabContainer: {
    height: 50,
    backgroundColor: "#16270D",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  tabContentContainer: {
    width: "30%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    height: 30,
    borderRadius: 4,
    flex: 1,
  },
  tabTitle: {
    color: "#52F81A",
    fontSize: 18,
    ...globalStyles.globalFont,
  },
  cardContainer: {
    width: "100%",
    height: 60,
    backgroundColor: "#16270D",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
    marginTop: 16,
  },
  cardTitleText: {
    color: "#6CF926",
    ...globalStyles.globalFont,
    fontSize: 18,
  },
  cardSubTitleText: {
    fontSize: 16,
    ...globalStyles.globalFont,
  },
});

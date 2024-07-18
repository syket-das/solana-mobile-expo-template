import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import React from "react";
import { useNavigation, useNavigationState } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";

const BottomTabNav = () => {
  const navigation = useNavigation();
  const currentRoute = useNavigationState(
    (state) => state.routes[state.index].name
  );

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        columnGap: 10,
        marginTop: 40,
        marginBottom: 10,
        paddingHorizontal: 15,
        position: "absolute",
        bottom: 0,
        width: "100%",
      }}
    >
      <TouchableHighlight onPress={() => navigation.navigate("Saga")}>
        <View
          style={[
            styles.gameBtn,
            currentRoute === "Saga" && styles.activeGameBtn,
          ]}
        >
          <Image
            source={require("../../assets/img/home/saga.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            SAGA
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Force")}>
        <View
          style={[
            styles.gameBtn,
            currentRoute === "Force" && styles.activeGameBtn,
          ]}
        >
          <Image
            source={require("../../assets/img/home/force.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            FORCE
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Home")}>
        <View
          style={[
            styles.bossBtn,
            currentRoute === "Home" && styles.activeBossBtn,
          ]}
        >
          <Image
            source={require("../../assets/img/home/gc.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: "#FFCC00", ...styles.btnLabel }}>PLAY</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Fuel")}>
        <View
          style={[
            styles.gameBtn,
            currentRoute === "Fuel" && styles.activeGameBtn,
          ]}
        >
          <Image
            source={require("../../assets/img/home/fuel.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            FUEL
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate("Ranks")}>
        <View
          style={[
            styles.gameBtn,
            currentRoute === "Ranks" && styles.activeGameBtn,
          ]}
        >
          <Image
            source={require("../../assets/img/home/ranks.png")}
            style={{ width: 50, height: 40 }}
          />
          <Text
            style={{
              color: "#6CF926",
              ...styles.btnLabel,
            }}
          >
            RANKS
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
  gameBtn: {
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    flexDirection: "column",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  bossBtn: {
    backgroundColor: "#FFCC0012",
    borderRadius: 10,
    flexDirection: "column",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  activeGameBtn: {
    borderColor: "#6CF92625",
    borderWidth: 1,
  },
  activeBossBtn: {
    borderColor: "#FFCC0075",
    borderWidth: 1,
  },
  btnLabel: {
    fontSize: 18,
    ...globalStyles.globalFont,
  },
});

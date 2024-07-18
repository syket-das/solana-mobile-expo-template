import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import useHomeStore from "../../store/homeStore";
import { globalStyles } from "../../styles/globalStyles";
import CustomProgressBar from "../global/ProgressBar";

const Lifeline = () => {
  const {
    points,
    setPoints,
    increasePoints,
    lifeline,
    maxLifeline,
    decreaseLifeline,
    increaseLifeline,
    mode,
  }: any = useHomeStore((state) => state);

  return (
    <View
      style={{
        marginVertical: 10,
        width: "100%",
        paddingHorizontal: 16,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          columnGap: 12,
          overflow: "scroll",
        }}
      >
        <Image
          source={require("../../assets/img/home/eb.png")}
          style={{ width: 30, height: 30 }}
        />
        {mode === "game" ? (
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              ...globalStyles.globalFont,
            }}
          >
            {lifeline} / {maxLifeline}
          </Text>
        ) : mode === "boss" ? (
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              ...globalStyles.globalFont,
            }}
          >
            ∞ / ∞
          </Text>
        ) : null}
      </View>
      <CustomProgressBar width={`${(lifeline / maxLifeline) * 100}%`} />
    </View>
  );
};

export default Lifeline;

const styles = StyleSheet.create({});

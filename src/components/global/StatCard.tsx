import React from "react";
import { StyleSheet, TouchableOpacity, View, Image, Text } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

interface StatCardProps {
  onPress?: () => void;
  cardImage: string | any;
  cardTitle: string | React.ReactNode;
  cardSubTitle?: React.ReactNode;
  isClickable: boolean;
}

const StatCard = ({
  isClickable,
  onPress,
  cardImage,
  cardTitle,
  cardSubTitle,
}: StatCardProps) => {
  const CardContent = (
    <View style={globalStyles.cardContentStyle}>
      <Image source={cardImage} style={globalStyles.cardImage} />
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 3,
        }}
      >
        <Text style={{ color: "#6CF926", ...globalStyles.cardTitleText }}>
          {cardTitle}
        </Text>
        {cardSubTitle}
      </View>
    </View>
  );

  return isClickable ? (
    <TouchableOpacity
      onPress={() => {
        if (onPress) {
          onPress();
        } else {
          console.log("Pressed");
        }
      }}
      style={globalStyles.cardContainer}
    >
      {CardContent}
      <Ionicons name="chevron-forward" size={20} color="#6CF926" />
    </TouchableOpacity>
  ) : (
    <View style={globalStyles.cardContainer}>{CardContent}</View>
  );
};

export default StatCard;

const styles = StyleSheet.create({});

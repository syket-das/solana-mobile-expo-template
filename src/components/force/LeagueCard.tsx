import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { globalStyles } from "../../styles/globalStyles";
import CustomProgressBar from "../global/ProgressBar";

interface LeagueCardProps {
  image: string | any;
  title: string;
  totalToken: number;
  progress: string | any;
}

const LeagueCard = (props: LeagueCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContentStyle}>
        <View style={globalStyles.cardContentStyle}>
          <Image source={props.image} style={styles.cardImage} />
          <View style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Text
              style={{
                color: "#6CF926",
                ...globalStyles.cardTitleText,
              }}
            >
              {props.title}
            </Text>
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

              <Text
                style={{
                  color: "#fff",
                  fontSize: 16,
                  ...globalStyles.globalFont,
                }}
              >
                {props.totalToken}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => console.log("Claimed")}
          style={styles.callToActionBtn}
        >
          <Text
            style={{
              color: "#6CF926",
              fontSize: 16,
              ...globalStyles.globalFont,
            }}
          >
            CLAIM
          </Text>
        </TouchableOpacity>
      </View>
      <CustomProgressBar width={props.progress} />
    </View>
  );
};

export default LeagueCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    borderColor: "#6CF92625",
    borderWidth: 1,
    marginBottom: 20,
    padding: 12,
  },
  cardContentStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingBottom: 16,
  },
  cardImage: {
    width: 40,
    height: 40,
  },
  callToActionBtn: {
    backgroundColor: "#1E3C0F",
    borderColor: "#6CF92625",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
});

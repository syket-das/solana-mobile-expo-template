import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  globalFont: {
    fontFamily: "Iceland-Regular",
  },
  cardContainer: {
    width: "100%",
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    borderColor: "#6CF92625",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  cardContentStyle: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  cardTitleText: {
    // color: "#6CF926",
    fontFamily: "Iceland-Regular",
    fontSize: 18,
  },
  cardSubTitleText: {
    fontSize: 16,
    fontFamily: "Iceland-Regular",
  },
  bottomSheetImageContainer: {
    alignSelf: "center",
    padding: 4,
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    borderColor: "#6CF92625",
    borderWidth: 1,
  },
  bottomSheetImage: {
    width: 50,
    height: 50,
  },
  tabContainer: {
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    borderColor: "#6CF92625",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
  },
});

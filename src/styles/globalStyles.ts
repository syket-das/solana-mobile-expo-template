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
  bottomSheetImage: {
    width: 50,
    height: 50,
  },
  bottomSheetImageContainer: {
    height: 69,
    width: 69,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#6CF92612",
    borderColor: "#6CF92625",
    borderWidth: 1,
  },
  bottomSheetTitle: {
    color: "#6CF926",
    textAlign: "center",
    fontSize: 24,
    marginTop: 12,
    fontFamily: "Iceland-Regular",
  },
  bottomSheetSubTitle: {
    marginTop: 10,
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
    maxWidth: 300,
    fontFamily: "Iceland-Regular",
    lineHeight: 24,
    width: 296,
  },
});

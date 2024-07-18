import { View, Image } from "react-native";
import CoinContainer from "./CoinContainer";

const NavBar = () => {
  return (
    <View>
      <Image
        source={require("../../assets/img/home/text-logo.png")}
        style={{
          width: "40%",
          height: 18,
          alignSelf: "center",
          marginTop: 10,
          objectFit: "contain",
        }}
      />
      <CoinContainer />
    </View>
  );
};

export default NavBar;

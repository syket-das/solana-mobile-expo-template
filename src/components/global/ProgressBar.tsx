import { View, Image } from "react-native";
import StripesImage from "../../assets/img/progress-bar-img.png";

interface CustomProgressBarProps {
  width: number | any;
}

export const CustomProgressBar = ({ width }: CustomProgressBarProps) => {
  return (
    <View
      style={{
        width: "100%",
        height: 20,
        backgroundColor: "#142E07",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#6CF92625",
        alignSelf: "center",
        overflow: "hidden",
      }}
    >
      <Image
        source={StripesImage}
        style={{
          width: width,
          height: "100%",
          borderRadius: 20,
          backgroundColor: "#6CF926",
        }}
      />
    </View>
  );
};

export default CustomProgressBar;

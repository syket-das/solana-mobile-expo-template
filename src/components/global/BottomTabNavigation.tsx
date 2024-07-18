import {
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  SafeAreaView,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SagaScreen from "../../screens/SagaScreen";
import ForceScreen from "../../screens/ForceScreen";
import HomeScreen from "../../screens/HomeScreen";
import FuelScreen from "../../screens/FuelScreen";
import RanksScreen from "../../screens/RanksScreen";
import { globalStyles } from "../../styles/globalStyles";
import CoinContainer from "./CoinContainer";
import NavBar from "./Navbar";

const TabArr = [
  {
    route: "SAGA",
    label: "SAGA",
    imageSrc: require("../../assets/img/home/saga.png"),
    component: SagaScreen,
  },
  {
    route: "FORCE",
    label: "FORCE",
    imageSrc: require("../../assets/img/home/force.png"),
    component: ForceScreen,
  },
  {
    route: "PLAY",
    label: "PLAY",
    imageSrc: require("../../assets/img/home/gc.png"),
    component: HomeScreen,
  },
  {
    route: "FUEL",
    label: "FUEL",
    imageSrc: require("../../assets/img/home/fuel.png"),
    component: FuelScreen,
  },
  {
    route: "RANKS",
    label: "RANKS",
    imageSrc: require("../../assets/img/home/ranks.png"),
    component: RanksScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const isPlayTab = item.route === "PLAY";

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View
        style={[
          styles.containerContentStyle,
          focused && (isPlayTab ? styles.activePlayBtn : styles.activeGameBtn),
          isPlayTab && styles.playTab,
        ]}
      >
        <Image source={item.imageSrc} style={styles.imageStyle} />
        <Text
          style={[styles.labelStyle, isPlayTab && styles.playTabLabelStyle]}
        >
          {item.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const BottomTabNavigation = () => {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="PLAY"
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            width: "100%",
            height: 88,
            position: "absolute",
            paddingHorizontal: 10,
            backgroundColor: "transparent",
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: (props) => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </View>
  );
};

export default BottomTabNavigation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerContentStyle: {
    backgroundColor: "#6CF92612",
    borderRadius: 10,
    flexDirection: "column",
    gap: 6,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginHorizontal: 4,
  },
  imageStyle: {
    width: 50,
    height: 40,
  },
  labelStyle: {
    color: "#6CF926",
    fontSize: 18,
    ...globalStyles.globalFont,
  },
  playTabLabelStyle: {
    color: "#FFCC00",
  },
  playTab: {
    backgroundColor: "#FFCC0012",
  },
  activeGameBtn: {
    borderColor: "#6CF92625",
    borderWidth: 1,
  },
  activePlayBtn: {
    borderColor: "#FFCC0075",
    borderWidth: 1,
  },
});

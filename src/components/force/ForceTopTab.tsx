import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { globalStyles } from "../../styles/globalStyles";
import LeagueCard from "./LeagueCard";
import StatCard from "../global/StatCard";
import RockLeagueImage from "../../assets/img/global/league/rock.png";
import WoodLeagueImage from "../../assets/img/global/league/wood.png";
import BronzeLeagueImage from "../../assets/img/global/league/bronze.png";
import SilverLeagueImage from "../../assets/img/global/league/silver.png";
import GoldLeagueImage from "../../assets/img/global/league/gold.png";
import PlatinumLeagueImage from "../../assets/img/global/league/platinum.png";
import TeamImage from "../../assets/img/global/team.png";
import SocialMediaNotificationImage from "../../assets/img/force/join-socials.png";
import Web3PassImage from "../../assets/img/force/web3-pass.png";
import DailyTaskImage from "../../assets/img/force/daily-task.png";

const ForceTopTab = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState("task");

  const TaskCardSubTitle = (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        columnGap: 4,
      }}
    >
      <Image
        source={require("../../assets/img/home/gcwg.png")}
        style={{ width: 18, height: 18 }}
      />

      <Text
        style={{
          color: "#fff",
          ...globalStyles.cardSubTitleText,
        }}
      >
        500000
      </Text>
    </View>
  );

  return (
    <View
      style={{
        width: "100%",
        paddingHorizontal: 15,
      }}
    >
      <View
        style={{
          marginTop: 28,
          ...globalStyles.tabContainer,
        }}
      >
        <TouchableOpacity
          onPress={() => setSelected("task")}
          style={{
            backgroundColor: selected === "task" ? "#6CF92625" : "transparent",
            ...styles.tabContentContainer,
          }}
        >
          <Text style={styles.tabTitle}>TASK</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected("leagues")}
          style={{
            backgroundColor:
              selected === "leagues" ? "#6CF92625" : "transparent",
            ...styles.tabContentContainer,
          }}
        >
          <Text style={styles.tabTitle}>LEAGUES</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelected("team")}
          style={{
            backgroundColor: selected === "team" ? "#6CF92625" : "transparent",
            ...styles.tabContentContainer,
          }}
        >
          <Text style={styles.tabTitle}>TEAM</Text>
        </TouchableOpacity>
      </View>

      {selected === "task" ? (
        <ScrollView
          style={{
            height: "62%",
          }}
        >
          <View
            style={{
              width: "100%",
              rowGap: 16,
              marginTop: 16,
            }}
          >
            <StatCard
              isClickable
              onPress={() => navigation.navigate("JoinSocials")}
              cardTitle="JOIN OUR SOCIALS"
              cardImage={SocialMediaNotificationImage}
              cardSubTitle={TaskCardSubTitle}
            />
            <StatCard
              isClickable
              onPress={() => navigation.navigate("Web3Pass")}
              cardTitle="WEB3.0 PASS"
              cardImage={Web3PassImage}
              cardSubTitle={TaskCardSubTitle}
            />
            <StatCard
              isClickable
              onPress={() => navigation.navigate("DailyTask")}
              cardTitle="DAILY TASK"
              cardImage={DailyTaskImage}
              cardSubTitle={TaskCardSubTitle}
            />
          </View>
        </ScrollView>
      ) : selected === "leagues" ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: "62%",
          }}
        >
          <LeagueCard
            image={RockLeagueImage}
            title="ROCK"
            totalToken={500}
            progress={"90%"}
          />
          <LeagueCard
            image={WoodLeagueImage}
            title="WOOD"
            totalToken={500}
            progress={"80%"}
          />
          <LeagueCard
            image={BronzeLeagueImage}
            title="BRONZE"
            totalToken={500}
            progress={"50%"}
          />
          <LeagueCard
            image={SilverLeagueImage}
            title="SILVER"
            totalToken={500}
            progress={"80%"}
          />
          <LeagueCard
            image={GoldLeagueImage}
            title="GOLD"
            totalToken={500}
            progress={"80%"}
          />
          <LeagueCard
            image={PlatinumLeagueImage}
            title="PLATINUM"
            totalToken={500}
            progress={"80%"}
          />
        </ScrollView>
      ) : selected === "team" ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: "62%",
          }}
        >
          <LeagueCard
            image={TeamImage}
            title="INVITE 1"
            totalToken={500}
            progress={"50%"}
          />
        </ScrollView>
      ) : null}
    </View>
  );
};

export default ForceTopTab;

const styles = StyleSheet.create({
  tabContentContainer: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 5,
    flex: 1,
  },
  tabTitle: {
    color: "#6CF926",
    fontSize: 18,
    ...globalStyles.globalFont,
  },
});

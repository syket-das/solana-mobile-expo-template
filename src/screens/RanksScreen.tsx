import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import NavBar from '../components/global/Navbar';
import { globalStyles } from '../styles/globalStyles';
import useStatsStore from '../store/statsStore';
import RanksTopTab from '../components/ranks/RanksTopTab';
import TotalPlayersImageIcon from '../assets/img/rank/total-players.png';
import DailyActivePlayersImageIcon from '../assets/img/rank/game.png';
import CurrentOnlinePlayersImageImageIcon from '../assets/img/rank/current-online-players.png';
import OverallScoreImageIcon from '../assets/img/saga/token-mined.png';
import StatCard from '../components/global/StatCard';
import BottomTabNav from '../components/global/BottomTabNav';
import useUserStore from '../store/userStore';

const RanksScreen = () => {
  const { stats, error, getStats }: any = useStatsStore((state) => state);

  const fetchStats = async () => {
    await getStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const {
    user,
    error: e,
    getUserProfile,
  }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/background-layer.jpg')}
        style={styles.bgImage}
      >
        <NavBar />
        <View
          style={{
            marginTop: 28,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <Text style={styles.titleText}>GAME STATS</Text>

          <StatCard
            isClickable={false}
            cardTitle="TOTAL PLAYERS"
            cardImage={TotalPlayersImageIcon}
            cardSubTitle={
              <Text style={{ color: '#fff', ...globalStyles.cardSubTitleText }}>
                {stats?.users ?? 0}
              </Text>
            }
          />

          <StatCard
            isClickable={false}
            cardTitle="DAILY ACTIVE PLAYERS"
            cardImage={DailyActivePlayersImageIcon}
            cardSubTitle={
              <Text style={{ color: '#fff', ...globalStyles.cardSubTitleText }}>
                {stats?.dailyActiveUsers ?? 0}
              </Text>
            }
          />

          <StatCard
            isClickable={false}
            cardTitle="CURRENT ONLINE PLAYERS"
            cardImage={CurrentOnlinePlayersImageImageIcon}
            cardSubTitle={
              <Text style={{ color: '#fff', ...globalStyles.cardSubTitleText }}>
                {stats?.activeUsers ?? 0}
              </Text>
            }
          />

          <StatCard
            isClickable={false}
            cardTitle="OVERALL SCORE"
            cardImage={OverallScoreImageIcon}
            cardSubTitle={
              <Text style={{ color: '#fff', ...globalStyles.cardSubTitleText }}>
                {user?.points?.alltimePoints}
              </Text>
            }
          />
        </View>

        <View
          style={{
            marginTop: 20,
            paddingHorizontal: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <Text style={styles.titleText}>RANKINGS</Text>
          <RanksTopTab />
        </View>

        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default RanksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  titleText: {
    fontSize: 24,
    color: '#52F81A',
    ...globalStyles.globalFont,
  },
});

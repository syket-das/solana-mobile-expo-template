import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import ForceTopTab from '../components/force/ForceTopTab';
import RanksTopTab from '../components/ranks/RanksTopTab';
import { globalStyles } from '../styles/globalStyles';
import useStatsStore from '../store/statsStore';

const RanksScreen = () => {
  const { stats, error, getStats }: any = useStatsStore((state) => state);

  const fetchStats = async () => {
    await getStats();
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/auth-bg.png')}
        style={styles.bgImage}
      >
        {/* <TopBarWalletMenu /> */}
        <Image
          source={require('../assets/img/home/text-logo.png')}
          style={{
            width: '50%',
            height: 40,
            alignSelf: 'center',
            marginTop: 10,
            objectFit: 'contain',
          }}
        />
        <CoinContainer />
        <Text
          style={{
            color: '#52F81A',
            fontSize: 24,
            marginTop: 20,
            marginHorizontal: 20,
            ...globalStyles.globalFont,
          }}
        >
          GAME STATS{' '}
        </Text>

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              <Image
                source={require('../assets/img/rank/total-players.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    ...globalStyles.globalFont,
                    fontSize: 18,
                    marginBottom: 5,
                  }}
                >
                  TOTAL PLAYERS
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    {stats?.users}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              <Image
                source={require('../assets/img/rank/game.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                    marginBottom: 5,
                  }}
                >
                  DAILY ACTIVE PLAYERS{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    {stats?.dailyActiveUsers}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 10,
              }}
            >
              <Image
                source={require('../assets/img/rank/current-online-players.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                    marginBottom: 5,
                  }}
                >
                  CURRENT ONLINE PLAYERS{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    {stats?.activeUsers}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#52F81A',
            marginTop: 20,
            marginHorizontal: 20,
            fontSize: 24,
            ...globalStyles.globalFont,
          }}
        >
          RANKINGS{' '}
        </Text>

        <RanksTopTab />
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
});

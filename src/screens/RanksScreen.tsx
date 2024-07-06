import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import ForceTopTab from '../components/force/ForceTopTab';
import RanksTopTab from '../components/ranks/RanksTopTab';

const RanksScreen = () => {
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
            fontSize: 20,
            marginTop: 20,
            marginHorizontal: 20,
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
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
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
                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
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
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
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
                  <Text style={{ color: '#fff', fontSize: 12 }}>5000</Text>
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
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
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
                  <Text style={{ color: '#fff', fontSize: 12 }}>5000</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#52F81A',
            fontSize: 20,
            marginTop: 20,
            marginHorizontal: 20,
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

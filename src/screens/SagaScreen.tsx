import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import ForceTopTab from '../components/force/ForceTopTab';
import RanksTopTab from '../components/ranks/RanksTopTab';
import useAuthStore from '../store/authStore';
import * as Clipboard from 'expo-clipboard';
import { Entypo, Ionicons } from '@expo/vector-icons';

const SagaScreen = () => {
  const { user }: any = useAuthStore((state) => state);
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async (str: any) => {
    await Clipboard.setStringAsync(str);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };
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

        <ScrollView
          style={{
            marginHorizontal: 20,
            marginTop: 20,
            maxHeight: '70%',
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 50,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
              paddingHorizontal: 10,
              paddingVertical: 5,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#16d70D',
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: '#6CF926',
                }}
              >
                YOUR STATS
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#31460C',
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
                source={require('../assets/img/global/league/platinum.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  YOUR MASTER | {user?.referredBy.userId.slice(0, 5)}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    TEAM SIZE
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>500 | </Text>

                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    TEAM SIZE
                  </Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>500</Text>
                </View>
              </View>
            </View>
            {/* <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#31460C',
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
                source={require('../assets/img/global/league/platinum.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  YOUR RANK
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>LEAGUE</Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    DIAMOND |{' '}
                  </Text>

                  <Text style={{ color: '#6CF926', fontSize: 12 }}>RANK</Text>
                  <Text style={{ color: '#fff', fontSize: 12 }}>50000</Text>
                </View>
              </View>
            </View>
            {/* <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#31460C',
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
                source={require('../assets/img/global/league/platinum.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  YOUR INVITE CODE
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 12 }}>
                    {user?.referralCode}
                  </Text>
                </View>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => {
                copyToClipboard(user?.referralCode);
                alert('Copied to clipboard');
              }}
              style={{
                backgroundColor: '#1E3C0F',

                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                marginRight: 10,
                paddingHorizontal: 10,
                paddingVertical: 5,
              }}
            >
              <Ionicons name="copy-outline" size={24} color="#6CF926" />
            </TouchableOpacity>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#31460C',
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
                source={require('../assets/img/global/league/platinum.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  YOUR TEAM
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                    marginTop: 5,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 12 }}>KKSSHS</Text>
                </View>
              </View>
            </View>
            <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text>
          </TouchableOpacity>
        </ScrollView>

        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default SagaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

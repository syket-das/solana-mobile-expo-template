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
import { globalStyles } from '../styles/globalStyles';
import CustomBottomSheet from '../components/global/CustomBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import InviteCodeModalContent from '../components/saga/InviteCodeModalContent';
import useUserStore from '../store/userStore';

const TeamScreen = () => {
  const { user, error, getUserProfile }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
  };
  const modeBottomSheetRef = React.useRef<BottomSheet>(null);
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
          <View
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
              paddingVertical: 10,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                backgroundColor: '#006600',
                borderRadius: 5,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: '#6CF926',
                  fontSize: 20,
                  ...globalStyles.globalFont,
                }}
              >
                YOUR TEAM
              </Text>
            </View>
          </View>

          {user &&
            user.referrals.map((referral: any) => (
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
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      STEVE JOBS
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 4,
                        marginLeft: 10,
                      }}
                    >
                      <Image
                        source={require('../assets/img/global/gcwg.png')}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                      <Text
                        style={{
                          color: '#6CF926',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        | TEAM 1100K
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}

          {user && user.referrals.length === 0 && (
            <View
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
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    ...globalStyles.globalFont,
                    fontSize: 18,
                  }}
                >
                  NO TEAM MEMBERS
                </Text>
              </View>
            </View>
          )}
        </ScrollView>

        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default TeamScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

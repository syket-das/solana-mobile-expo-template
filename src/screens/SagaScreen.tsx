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
import { useNavigation } from '@react-navigation/native';
import useUserStore from '../store/userStore';

const SagaScreen = () => {
  const { user, error, getUserProfile }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);

  const modeBottomSheetRef = React.useRef<BottomSheet>(null);
  const [copiedText, setCopiedText] = useState('');
  const navigation = useNavigation();

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
                YOUR STATS
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              modeBottomSheetRef.current?.expand();
            }}
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
                source={require('../assets/img/home/referral-code.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
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
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    {user?.referralCode}
                  </Text>
                </View>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#6CF926"
              style={{
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Team');
            }}
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
                source={require('../assets/img/saga/your-team.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
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
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    {user?.referrals?.length || 0}
                  </Text>
                </View>
              </View>
            </View>
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#6CF926"
              style={{
                marginRight: 10,
              }}
            />
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
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    ...globalStyles.globalFont,
                    fontSize: 18,
                  }}
                >
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
                  <Text
                    style={{
                      color: '#6CF926',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    TEAM SIZE
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500 |{' '}
                  </Text>

                  <Text
                    style={{
                      color: '#6CF926',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    TEAM SIZE
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500
                  </Text>
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
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
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
                  <Text
                    style={{
                      color: '#6CF926',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    LEAGUE
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    DIAMOND |{' '}
                  </Text>

                  <Text
                    style={{
                      color: '#6CF926',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    RANK
                  </Text>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    50000
                  </Text>
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
                    | LVL 1
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <BottomTabNav />
      </ImageBackground>

      <CustomBottomSheet ref={modeBottomSheetRef} closable>
        <InviteCodeModalContent />
      </CustomBottomSheet>
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

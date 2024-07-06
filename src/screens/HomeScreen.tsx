import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { TopBarWalletMenu } from '../components/top-bar/top-bar-ui';
import { useAuthorization } from '../utils/useAuthorization';
import GameCoin from '../components/home/GameCoin';
import useHomeStore from '../store/homeStore';
import Animated from 'react-native-reanimated';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheet from '../components/global/CustomBottomSheet';
import Modes from '../components/home/Modes';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import BossModeModalContent from '../components/home/BossModeModalContent';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import useAuthStore from '../store/authStore';
import useReferralStore from '../store/referralStore.ts';
import Lifeline from '../components/home/Lifeline';
import { alertAndLog } from '../utils/alertAndLog';

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { user }: any = useAuthStore((state) => state);
  const {
    referral,
    createReferral,
    error: referralError,
  }: any = useReferralStore((state) => state);

  const [code, setCode] = useState('');

  const bottomSheetRef = useRef<BottomSheet>(null);
  const modeBottomSheetRef = useRef<BottomSheet>(null);

  const handleOpenPress = useCallback(
    () => bottomSheetRef.current?.expand(),
    []
  );

  const openSheet = () => {
    setTimeout(() => {
      handleOpenPress();
    }, 500);
  };

  useEffect(() => {
    if (!user?.referredBy) {
      openSheet();
    }
  }, [isFocused]);

  const submitReferral = async () => {
    try {
      await createReferral(user.id, code);

      if (referralError) {
        alertAndLog(referralError, referralError);
        return;
      }

      navigation.navigate('Auth');
    } catch (error) {}
  };

  return (
    <>
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
          <GameCoin />
          <ImageBackground
            source={require('../assets/img/auth-bg.png')}
            style={{
              width: '100%',
              height: 50,
              marginTop: 10,
              justifyContent: 'center',
              flexDirection: 'row',
              columnGap: 20,
              alignItems: 'center',
            }}
          >
            <Image
              source={require('../assets/img/home/rock.png')}
              style={{ width: 40, height: 40 }}
            />
            <Text style={{ color: '#fff' }}>ROCK</Text>
          </ImageBackground>

          <Modes bottomSheetRef={modeBottomSheetRef} />
          <Lifeline />

          <BottomTabNav />

          <CustomBottomSheet ref={bottomSheetRef}>
            <View
              style={{
                alignSelf: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: '600',
                  color: '#6CF926',
                }}
              >
                ENTER YOUR INVITE CODE
              </Text>
              <Text
                style={{
                  color: '#fff',
                  maxWidth: '80%',
                  textAlign: 'center',
                  marginTop: 10,
                }}
              >
                Please enter your invite code to continue and play the game. An
                invite code is required to access the game.
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 40,
                  backgroundColor: '#383C1C',
                  width: '80%',
                  borderRadius: 10,
                }}
              >
                <TextInput
                  placeholder="Enter code"
                  placeholderTextColor="#ccc"
                  style={{
                    padding: 10,
                    borderRadius: 10,
                    flex: 1,
                    color: '#fff',
                  }}
                  value={code}
                  onChangeText={(text) => setCode(text)}
                />
                <TouchableHighlight
                  onPress={submitReferral}
                  style={{
                    backgroundColor: '#EEBF01',
                    borderRadius: 10,
                    height: '100%',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: '#000',
                      padding: 10,
                      alignItems: 'center',
                      marginTop: 5,
                      fontWeight: '600',
                    }}
                  >
                    SUBMIT
                  </Text>
                </TouchableHighlight>
              </View>

              <Text
                style={{
                  color: 'red',
                  marginTop: 20,
                  alignSelf: 'center',
                }}
              >
                {referralError}
              </Text>
            </View>
          </CustomBottomSheet>
          <CustomBottomSheet ref={modeBottomSheetRef} closable>
            <BossModeModalContent />
          </CustomBottomSheet>
        </ImageBackground>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  gcCOntainer: {},
  gameBtn: {
    backgroundColor: '#1E3B10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  bossBtn: {
    backgroundColor: '#282209',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

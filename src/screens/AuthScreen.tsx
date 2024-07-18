import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useCallback, useEffect, useState } from 'react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import {
  fetchAuthorization,
  useAuthorization,
} from '../utils/useAuthorization';
import { useMobileWallet } from '../utils/useMobileWallet';
import { alertAndLog } from '../utils/alertAndLog';
import useAuthStore from '../store/authStore';
import { globalStyles } from '../styles/globalStyles';

const AuthScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const { user, registerOrLogin, error }: any = useAuthStore((state) => state);

  const {
    authorizeSession,
    accounts,
    selectedAccount,
    deauthorizeSession,
    isLoading,
    authorizeSessionWithSignIn,
  } = useAuthorization();

  const { signIn } = useMobileWallet();
  const [signInInProgress, setSignInInProgress] = useState(false);
  const handleConnectPress = useCallback(async () => {
    try {
      if (signInInProgress) {
        return;
      }

      setSignInInProgress(true);
      await signIn({
        domain: 'ecosystem-kernel.onrender.com',
        statement: 'Sign into Azameina',
        uri: 'https://ecosystem-kernel.onrender.com',
      });

      if (selectedAccount?.address !== '') {
        await registerOrLogin(selectedAccount);

        if (error) {
          alertAndLog('Error during sign in', error);
          return;
        }

        if (user) {
          navigation.navigate('Home');
        }
      }
    } catch (err: any) {
      alertAndLog(
        'Error during sign in',
        err instanceof Error ? err.message : err
      );
    } finally {
      setSignInInProgress(false);
    }
  }, [signInInProgress, authorizeSession]);

  const getAuthData = async () => {
    const d = await fetchAuthorization();

    await registerOrLogin(d?.selectedAccount);

    if (user) {
      navigation.navigate('Home');
    }
  };

  useEffect(() => {
    if (isFocused && selectedAccount && user) {
      handleAuth();
    } else {
      async function fetchData() {
        const data = getAuthData();
      }

      fetchData();
    }
  }, [isFocused, selectedAccount, user]);

  const handleAuth = async () => {
    await registerOrLogin(selectedAccount);

    if (user) {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/background-layer.jpg')}
        style={styles.bgImage}
      >
        <Image
          source={require('../assets/img/auth-logo.png')}
          style={{
            width: 280,
            height: 200,
            alignSelf: 'center',
            marginTop: 20,
            objectFit: 'contain',
          }}
        />

        <TouchableOpacity onPress={() => handleConnectPress()}>
          <View style={styles.authBtn}>
            <View style={styles.logoContainer}>
              <Image
                source={require('../assets/img/solana-logo.png')}
                style={styles.solanaLogo}
              />
            </View>
            <Text style={[styles.authBtnText, globalStyles.globalFont]}>
              CONNECT WALLET
            </Text>
          </View>
        </TouchableOpacity>
        <Text
          style={[
            {
              color: '#fff',
              alignSelf: 'center',
              marginTop: 20,
              ...globalStyles.globalFont,
            },
          ]}
        >
          CONNECT YOUR SOLANA WALLET TO{' '}
        </Text>
        <Text
          style={{
            color: '#fff',
            alignSelf: 'center',
            marginTop: 5,
            ...globalStyles.globalFont,
          }}
        >
          START PLAY THE GAME
        </Text>

        <Image
          source={require('../assets/img/auth-char.png')}
          style={{
            width: 280,
            height: 380,
            position: 'absolute',
            bottom: 0,
            marginHorizontal: 'auto',
            alignSelf: 'center',
          }}
        />
      </ImageBackground>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  authBtn: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#1E3B10',
    opacity: 0.9,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 6,
    paddingHorizontal: 12,
    flexDirection: 'row',
    columnGap: 15,
  },

  authBtnText: {
    color: '#6CF926',
    fontWeight: '600',
    fontSize: 20,
  },
  solanaLogo: {
    width: 12,
    height: 12,
  },
  logoContainer: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#6CF926',
  },
});

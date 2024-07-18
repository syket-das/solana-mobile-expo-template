import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { globalStyles } from '../../styles/globalStyles';
import useUserStore from '../../store/userStore';
import * as Clipboard from 'expo-clipboard';

const InviteCodeModalContent = () => {
  const { user, error, getUserProfile }: any = useUserStore((state) => state);

  const fetchUserProfile = async () => {
    await getUserProfile();
    copyToClipboard(user?.referralCode || '');
  };

  React.useEffect(() => {
    fetchUserProfile();
  }, []);
  const [isVerified, setIsVerified] = useState(false);
  const [code, setCode] = useState('');

  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = async (str: any) => {
    await Clipboard.setStringAsync(str);
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getStringAsync();
    setCopiedText(text);
  };

  return (
    <View
      style={{
        alignSelf: 'center',
        marginTop: 20,
      }}
    >
      <View style={globalStyles.bottomSheetImageContainer}>
        <Image
          source={require('../../assets/img/home/referral-code.png')}
          style={globalStyles.bottomSheetImage}
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: '#6CF926',
          ...globalStyles.globalFont,
          alignSelf: 'center',
          marginTop: 10,
        }}
      >
        YOUR INVITE CODE
      </Text>
      <Text
        style={{
          color: '#fff',
          maxWidth: '80%',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 18,
          lineHeight: 20,
          ...globalStyles.globalFont,
        }}
      >
        Share your invite code with friends to earn rewards. Both you and your
        friend will receive
        <Text
          style={{
            color: '#FFCC00',
            fontSize: 18,
            ...globalStyles.globalFont,
          }}
        >
          {' 100 LP '}
        </Text>
        for each successful referral. Plus, you'll earn{' '}
        <Text
          style={{
            color: '#FFCC00',
            fontSize: 18,
            ...globalStyles.globalFont,
          }}
        >
          {' 1% '}
        </Text>
        of the LP your referral earns through tapping.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
          backgroundColor: '#383C1C',
          width: '60%',
          borderRadius: 10,
          borderColor: '#FFCC00',
          borderWidth: 1,
          alignSelf: 'center',
        }}
      >
        <Text
          style={{
            padding: 10,
            borderRadius: 10,
            flex: 1,
            color: '#fff',
            ...globalStyles.globalFont,
            fontSize: 18,
          }}
        >
          {user?.referralCode}
        </Text>
        <TouchableHighlight
          style={{
            backgroundColor: '#FFCC00',
            // borderRadius: 10,
            borderTopRightRadius: 10,
            borderBottomRightRadius: 10,
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#000',
              padding: 10,
              alignItems: 'center',
              marginTop: 8,
              fontWeight: '600',
              ...globalStyles.globalFont,
            }}
          >
            COPY
          </Text>
        </TouchableHighlight>
      </View>

      <Text
        style={{
          color: 'red',
          marginTop: 20,
          alignSelf: 'center',
        }}
      ></Text>
    </View>
  );
};

export default InviteCodeModalContent;

const styles = StyleSheet.create({
  gameBtn: {
    width: 70,
    backgroundColor: '#1E3B10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  adBtn: {
    maxWidth: 150,
    backgroundColor: '#1E3B10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
});

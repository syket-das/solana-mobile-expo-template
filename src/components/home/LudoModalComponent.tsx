import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';
import useHomeStore from '../../store/homeStore';
import { globalStyles } from '../../styles/globalStyles';
import { Entypo } from '@expo/vector-icons';

const LudoModeModalComponent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { mode, setModeToBoss }: any = useHomeStore((state) => state);

  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <View>
        <View>
          <View style={styles.gameBtn}>
            <Image
              source={require('../../assets/img/fuel/full-charge.png')}
              style={{ width: 50, height: 40 }}
            />
          </View>
        </View>
      </View>
      <Text
        style={{
          color: '#6CF926',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 24,
          ...globalStyles.globalFont,
        }}
      >
        LUDO -- MONEYBANK
      </Text>
      <Text
        style={{
          color: '#6CF926',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 16,
          maxWidth: 300,
          ...globalStyles.globalFont,
          lineHeight: 20,
        }}
      >
        Experience Ludo moneyBank: a Web3.0 Play-to-Earn game with Azameina
        token and NFT integration. Enjoy Indie and Tournament modes for
        entertainment and financial rewards.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: 20,
        }}
      >
        <TouchableHighlight
          onPress={() => {
            setModeToBoss();
          }}
        >
          <View style={styles.adBtn}>
            <Entypo name="lock" size={20} color="#6CF926" />
            <Text
              style={{
                color: '#fff',
                ...globalStyles.globalFont,
                fontSize: 20,
              }}
            >
              LOCKED
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default LudoModeModalComponent;

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
    flexDirection: 'row',
    columnGap: 10,
  },
});

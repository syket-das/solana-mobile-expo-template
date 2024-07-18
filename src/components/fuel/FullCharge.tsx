import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import Entypo from '@expo/vector-icons/Entypo';
import { globalStyles } from '../../styles/globalStyles';

const FullCharge = () => {
  return (
    <View
      style={{
        marginTop: 30,
        alignItems: 'center',
      }}
    >
      <View>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/fuel/full-charge.png')}
            style={{ width: 45, height: 45 }}
          />
        </View>
      </View>
      <Text
        style={{
          color: '#6CF926',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 20,
          fontWeight: 'bold',
        }}
      >
        FULL CHARGE
      </Text>
      <Text
        style={{
          color: '#fff',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 18,
          maxWidth: 300,
          ...globalStyles.globalFont,
          lineHeight: 20,
        }}
      >
        To fully charge your battery instantly, please click the button below
        and watch the entire ad without skipping.{' '}
      </Text>

      <TouchableHighlight onPress={() => console.log('rock')}>
        <View style={styles.adBtn}>
          <Image
            source={require('../../assets/img/fuel/watch-ad.png')}
            style={{ width: 25, height: 25 }}
          />
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>WATCH AD</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default FullCharge;

const styles = StyleSheet.create({
  gameBtn: {
    backgroundColor: '#1E3B10',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  adBtn: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 5,
    backgroundColor: '#1E3B10',
    borderColor: '#FFCC00',
    borderWidth: 0.5,
    borderRadius: 6,
  },
});

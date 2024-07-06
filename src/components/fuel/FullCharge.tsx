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

const FullCharge = () => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <TouchableHighlight onPress={() => console.log('rock')}>
        <View>
          <View style={styles.gameBtn}>
            <Image
              source={require('../../assets/img/fuel/full-charge.png')}
              style={{ width: 50, height: 40 }}
            />
          </View>
        </View>
      </TouchableHighlight>
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
          color: '#6CF926',
          textAlign: 'center',
          marginTop: 10,
          fontSize: 16,
          maxWidth: 300,
        }}
      >
        To fully charge your battery instantly, please click the button below
        and watch the entire ad without skipping.{' '}
      </Text>

      <TouchableHighlight onPress={() => console.log('rock')}>
        <View style={styles.adBtn}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>WATCH AD</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default FullCharge;

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
    width: 150,
    backgroundColor: '#1E3B10',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
});

import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useState } from 'react';
import useHomeStore from '../../store/homeStore';

const BossModeModalContent = () => {
  const [isVerified, setIsVerified] = useState(false);
  const { mode, setModeToBoss }: any = useHomeStore((state) => state);

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
        BOSS MODE
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
        Battery draining so fast right? Want it to last for 10 hours while
        earning Lumik points effortlessly? Click below to mint this NFT and
        enjoy an 10 hour infinite battery limit daily, for a lifetime.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: 20,
        }}
      >
        {!isVerified && (
          <TouchableHighlight onPress={() => console.log('rock')}>
            <View style={styles.adBtn}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>GO</Text>
            </View>
          </TouchableHighlight>
        )}
        {!isVerified && (
          <TouchableHighlight onPress={() => setIsVerified(true)}>
            <View style={styles.adBtn}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>CHECK</Text>
            </View>
          </TouchableHighlight>
        )}
        {isVerified && (
          <TouchableHighlight
            onPress={() => {
              setModeToBoss();
            }}
          >
            <View style={styles.adBtn}>
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>START</Text>
            </View>
          </TouchableHighlight>
        )}
      </View>
    </View>
  );
};

export default BossModeModalContent;

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

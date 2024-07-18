import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import useHomeStore from '../../store/homeStore';
import { globalStyles } from '../../styles/globalStyles';

const BossModeModalContent = () => {
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
        BOSS MODE
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
          <TouchableOpacity onPress={() => console.log('rock')}>
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: '#fff',
                  ...globalStyles.globalFont,
                  fontSize: 20,
                }}
              >
                GO
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {!isVerified && (
          <TouchableOpacity onPress={() => setIsVerified(true)}>
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: '#fff',
                  ...globalStyles.globalFont,
                  fontSize: 20,
                }}
              >
                CHECK
              </Text>
            </View>
          </TouchableOpacity>
        )}
        {isVerified && (
          <TouchableOpacity
            onPress={() => {
              setModeToBoss();
            }}
          >
            <View style={styles.adBtn}>
              <Text
                style={{
                  color: '#fff',
                  ...globalStyles.globalFont,
                  fontSize: 20,
                }}
              >
                START
              </Text>
            </View>
          </TouchableOpacity>
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

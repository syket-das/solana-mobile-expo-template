import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';

const EnergyCapacity = () => {
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
              source={require('../../assets/img/fuel/energy-capacity.png')}
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
        ENERGY CAPACITY
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
        Would you like to increase your energy capacity? Click the button below
        to mint this NFT and enjoy a higher energy capacity limit daily, for a
        lifetime.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: 20,
        }}
      >
        <TouchableHighlight onPress={() => console.log('rock')}>
          <View style={styles.adBtn}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>GO</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => console.log('rock')}>
          <View style={styles.adBtn}>
            <Text style={{ color: '#fff', fontWeight: 'bold' }}>CHECK</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default EnergyCapacity;

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

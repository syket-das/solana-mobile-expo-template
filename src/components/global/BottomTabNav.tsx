import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const BottomTabNav = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
        marginTop: 40,
        position: 'absolute',
        bottom: 0,
        width: '100%',
      }}
    >
      <TouchableHighlight onPress={() => navigation.navigate('Saga')}>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/home/saga.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>SAGA</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Force')}>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/home/force.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>FORCE</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Home')}>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/home/gc.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>PLAY</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Fuel')}>
        <View style={styles.bossBtn}>
          <Image
            source={require('../../assets/img/home/fuel.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#EEBF01' }}>FUEL</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => navigation.navigate('Ranks')}>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/home/ranks.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>RANKS</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default BottomTabNav;

const styles = StyleSheet.create({
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
});

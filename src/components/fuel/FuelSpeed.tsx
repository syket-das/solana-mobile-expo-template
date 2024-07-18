import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import { globalStyles } from '../../styles/globalStyles';

const FuelSpeed = () => {
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
            source={require('../../assets/img/fuel/fuel-speed.png')}
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
        FUEL SPEED
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
        Would you like to speed up your fuel filling speed? Click the button
        below to to spend{' '}
        <Text
          style={{
            color: '#FFCC00',
          }}
        >
          500
        </Text>{' '}
        Lumik points and upgrade your fuel filling speed to{' '}
        <Text
          style={{
            color: '#FFCC00',
          }}
        >
          LV 2
        </Text>
        , boosting it to{' '}
        <Text
          style={{
            color: '#FFCC00',
          }}
        >
          2
        </Text>{' '}
        points per second.
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: 15,
          marginTop: 20,
        }}
      >
        <TouchableHighlight onPress={() => console.log('rock')}>
          <View style={styles.CTABtn}>
            <Image
              source={require('../../assets/img/global/gcwg.png')}
              style={{ width: 20, height: 20 }}
            />
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
              }}
            >
              500
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default FuelSpeed;

const styles = StyleSheet.create({
  gameBtn: {
    backgroundColor: '#1E3B10',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 6,
  },
  CTABtn: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
    backgroundColor: '#1E3B10',
    borderRadius: 6,
    borderColor: '#FFCC00',
    borderWidth: 0.5,
    paddingHorizontal: 6,
    paddingVertical: 4,
    paddingRight: 10,
  },
});

import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useHomeStore from '../../store/homeStore';

const CoinContainer = () => {
  const { points }: any = useHomeStore((state) => state);

  return (
    <View style={styles.coinContainer}>
      <Image
        source={require('../../assets/img/home/gcwg.png')}
        style={{
          width: 40,
          height: 40,
          objectFit: 'contain',
        }}
      />
      <Text style={{ color: '#fff' }}>{points}</Text>
    </View>
  );
};

export default CoinContainer;

const styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginTop: 10,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#31460C',
    width: '70%',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    columnGap: 20,
    backgroundColor: '#38321C',
  },
});

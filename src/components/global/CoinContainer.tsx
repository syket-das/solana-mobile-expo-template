import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useHomeStore from '../../store/homeStore';
import { globalStyles } from '../../styles/globalStyles';

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
      <Text style={{ color: '#fff', ...globalStyles.globalFont, fontSize: 20 }}>
        {points}
      </Text>
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
    borderColor: '#FFCC00',
    borderWidth: 1,
    width: '70%',
    borderRadius: 10,
    padding: 5,
    alignItems: 'center',
    columnGap: 20,
    backgroundColor: '#38321C',
  },
});

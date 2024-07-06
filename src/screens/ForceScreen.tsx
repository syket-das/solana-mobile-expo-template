import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import ForceTopTab from '../components/force/ForceTopTab';

const ForceScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/auth-bg.png')}
        style={styles.bgImage}
      >
        {/* <TopBarWalletMenu /> */}
        <Image
          source={require('../assets/img/home/text-logo.png')}
          style={{
            width: '50%',
            height: 40,
            alignSelf: 'center',
            marginTop: 10,
            objectFit: 'contain',
          }}
        />
        <CoinContainer />
        <ForceTopTab />
        <BottomTabNav />
      </ImageBackground>
    </View>
  );
};

export default ForceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

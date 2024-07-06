import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useRef } from 'react';
import useHomeStore from '../../store/homeStore';
import CustomBottomSheet from '../global/CustomBottomSheet';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';

const Modes = ({
  bottomSheetRef,
}: {
  bottomSheetRef: React.RefObject<BottomSheet>;
}) => {
  const {
    points,
    setPoints,
    increasePoints,
    lifeline,
    maxLifeline,
    decreaseLifeline,
    startLifelineRegen,
    stopLifelineRegen,
    setModeToBoss,
    setModeToGame,
    mode,
  }: any = useHomeStore((state) => state);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 20,
        marginTop: 10,
      }}
    >
      <TouchableHighlight onPress={() => setModeToGame()}>
        <View
          style={[
            styles.gameBtn,
            {
              borderWidth: mode === 'game' ? 2 : 0,
              borderColor: mode === 'game' ? 'red' : 'transparent',
            },
          ]}
        >
          <Image
            source={require('../../assets/img/home/mine-coin.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>GAME</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => handleOpenPress()}>
        <View
          style={[
            styles.bossBtn,
            {
              borderWidth: mode === 'boss' ? 2 : 0,
              borderColor: mode === 'boss' ? 'red' : 'transparent',
            },
          ]}
        >
          <Image
            source={require('../../assets/img/home/boss.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#EEBF01' }}>BOSS</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight onPress={() => console.log('rock')}>
        <View style={styles.gameBtn}>
          <Image
            source={require('../../assets/img/home/ludo.png')}
            style={{ width: 50, height: 40 }}
          />
          <Text style={{ color: '#6CF926' }}>LUDU</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default Modes;

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

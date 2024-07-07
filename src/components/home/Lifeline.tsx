import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import useHomeStore from '../../store/homeStore';
import { globalStyles } from '../../styles/globalStyles';

const Lifeline = () => {
  const {
    points,
    setPoints,
    increasePoints,
    lifeline,
    maxLifeline,
    decreaseLifeline,
    increaseLifeline,
    mode,
  }: any = useHomeStore((state) => state);

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          columnGap: 20,
          marginTop: 10,
        }}
      >
        {mode === 'game' ? (
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              ...globalStyles.globalFont,
            }}
          >
            {lifeline} / {maxLifeline}
          </Text>
        ) : mode === 'boss' ? (
          <Text
            style={{
              color: '#fff',
              fontSize: 20,
              ...globalStyles.globalFont,
            }}
          >
            ∞ / ∞
          </Text>
        ) : null}
        <Image
          source={require('../../assets/img/home/eb.png')}
          style={{ width: 40, height: 30 }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 10,
        }}
      >
        <View
          style={{
            width: '85%',
            height: 20,
            backgroundColor: '#1E3B10',
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: `${(lifeline / maxLifeline) * 100}%`,
              height: '100%',
              backgroundColor: '#6CF926',
              borderRadius: 10,
            }}
          ></View>
        </View>
      </View>
    </>
  );
};

export default Lifeline;

const styles = StyleSheet.create({});

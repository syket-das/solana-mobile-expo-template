// @ts-nocheck
import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  Image,
} from 'react-native';
import useHomeStore from '../../store/homeStore';
import useAuthStore from '../../store/authStore';

const GameCoin = () => {
  const {
    id,
    points,
    setPoints,
    increasePoints,
    lifeline,
    decreaseLifeline,
    startLifelineRegen,
    stopLifelineRegen,
    mode,
    fetchPointsFromServer,
    updatePointsOnServer,
  }: any = useHomeStore((state) => state);

  const { user } = useAuthStore((state) => state);

  const userId = user.id;

  useEffect(() => {
    fetchPointsFromServer(userId);
  }, [fetchPointsFromServer, userId]);

  const animations = useRef([]).current;
  const [tiltX] = useState(new Animated.Value(0));
  const [tiltY] = useState(new Animated.Value(0));

  const handlePressIn = (event) => {
    const { locationX, locationY } = event.nativeEvent;

    const tiltDirectionX = locationX > 175 ? 1 : -1; // Assuming coin is 350px wide
    const tiltDirectionY = locationY > 175 ? 1 : -1; // Assuming coin is 350px tall

    Animated.timing(tiltX, {
      toValue: tiltDirectionX * 15,
      duration: 100,
      useNativeDriver: true,
    }).start();

    Animated.timing(tiltY, {
      toValue: -tiltDirectionY * 15,
      duration: 100,
      useNativeDriver: true,
    }).start();

    increasePoints();
    decreaseLifeline();

    const newAnimation = new Animated.Value(0);
    animations.push(newAnimation);

    Animated.timing(newAnimation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(newAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        animations.shift(); // Remove the animation once it finishes
      });
    });

    // Update points on the server with debounce
    updatePointsOnServer({
      id,
      points: points + 1,
    });
  };

  const handlePressOut = () => {
    Animated.timing(tiltX, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.timing(tiltY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    startLifelineRegen();
    return () => {
      stopLifelineRegen();
    };
  }, [startLifelineRegen, stopLifelineRegen]);

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
        <Animated.View
          style={[
            styles.coin,
            {
              transform: [
                { perspective: 1000 },
                {
                  rotateY: tiltX.interpolate({
                    inputRange: [-15, 15],
                    outputRange: ['-15deg', '15deg'],
                  }),
                },
                {
                  rotateX: tiltY.interpolate({
                    inputRange: [-15, 15],
                    outputRange: ['-15deg', '15deg'],
                  }),
                },
              ],
            },
          ]}
        >
          {mode === 'game' ? (
            <Image
              source={require('../../assets/img/home/gc.png')}
              style={styles.image}
            />
          ) : mode === 'boss' ? (
            <Image
              source={require('../../assets/img/home/golden-mining-coin.png')}
              style={styles.image}
            />
          ) : null}
        </Animated.View>
      </TouchableWithoutFeedback>

      {animations.map((anim, index) => (
        <Animated.Text
          key={index}
          style={[
            styles.plusOne,
            {
              opacity: anim,
              transform: [
                {
                  translateY: anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -100],
                  }),
                },
              ],
            },
          ]}
        >
          +1
        </Animated.Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coin: {
    marginBottom: 20,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },
  points: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  plusOne: {
    position: 'absolute',
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default GameCoin;

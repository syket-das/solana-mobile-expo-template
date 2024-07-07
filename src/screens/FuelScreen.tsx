import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import GameCoin from '../components/home/GameCoin';
import useHomeStore from '../store/homeStore';
import Animated from 'react-native-reanimated';
import BottomTabNav from '../components/global/BottomTabNav';
import CustomBottomSheet from '../components/global/CustomBottomSheet';
import FullCharge from '../components/fuel/FullCharge';
import LumikTaper from '../components/fuel/LumikTaper';
import Multiplier from '../components/fuel/Multiplier';
import EnergyCapacity from '../components/fuel/EnergyCapacity';
import FeulSpeed from '../components/fuel/FeulSpeed';
import BottomSheet from '@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet';
import CoinContainer from '../components/global/CoinContainer';
import { globalStyles } from '../styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
const FuelScreen = () => {
  const { points }: any = useHomeStore((state) => state);

  const bottomSheetRef = useRef<BottomSheet>(null);

  const handleClosePress = () => bottomSheetRef.current?.close();
  const handleOpenPress = () => bottomSheetRef.current?.expand();
  const [key, setKey] = useState<string | null>(null);

  return (
    <>
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

          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <Text style={styles.titleText}>POWER UPS</Text>

            <View
              style={{
                width: '90%',
                rowGap: 20,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setKey('full-charge');
                  handleOpenPress();
                }}
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: '#31460C',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={require('../assets/img/fuel/full-charge.png')}
                    style={{ width: 40, height: 40 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      FULL CHARGE
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '92%',
                      }}
                    >
                      <Text
                        style={{
                          color: '#fff',
                          marginLeft: 10,
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        21/22
                      </Text>
                      <Text
                        style={{
                          color: '#6CF926',
                          marginRight: 10,
                          ...globalStyles.globalFont,
                        }}
                      >
                        00:14:36
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setKey('lumik-taper');
                  handleOpenPress();
                }}
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: '#31460C',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={require('../assets/img/fuel/auto-miner.png')}
                    style={{ width: 40, height: 40 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      LUMIK TAPER
                    </Text>
                    <Text
                      style={{
                        color: '#fff',
                        marginLeft: 10,
                        fontSize: 12,
                        ...globalStyles.globalFont,
                      }}
                    >
                      1/1
                    </Text>
                  </View>
                </View>
                <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              marginTop: 20,
              marginLeft: 20,
            }}
          >
            <Text style={styles.titleText}>Boosters</Text>

            <View
              style={{
                width: '90%',
                rowGap: 20,
                marginTop: 20,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setKey('multiplier');
                  handleOpenPress();
                }}
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: '#31460C',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={require('../assets/img/fuel/multiplier.png')}
                    style={{ width: 40, height: 40 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      MULTIPLIER{' '}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 4,
                        marginLeft: 10,
                      }}
                    >
                      <Image
                        source={require('../assets/img/global/gcwg.png')}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                      <Text
                        style={{
                          color: '#6CF926',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        | LVL 1
                      </Text>
                    </View>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#6CF926"
                  style={{
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setKey('energy-capacity');
                  handleOpenPress();
                }}
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: '#31460C',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={require('../assets/img/fuel/energy-capacity.png')}
                    style={{ width: 40, height: 40 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      ENERGY CAPACITY
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 4,
                        marginLeft: 10,
                      }}
                    >
                      <Image
                        source={require('../assets/img/global/gcwg.png')}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                      <Text
                        style={{
                          color: '#6CF926',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        | LVL 1
                      </Text>
                    </View>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#6CF926"
                  style={{
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setKey('fuel-speed');
                  handleOpenPress();
                }}
                style={{
                  width: '100%',
                  height: 60,
                  backgroundColor: '#31460C',
                  borderRadius: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <Image
                    source={require('../assets/img/fuel/energy-capacity.png')}
                    style={{ width: 40, height: 40 }}
                  />
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        ...globalStyles.globalFont,
                        fontSize: 18,
                      }}
                    >
                      FUEL SPEED
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 4,
                        marginLeft: 10,
                      }}
                    >
                      <Image
                        source={require('../assets/img/fuel/fuel-speed.png')}
                        style={{ width: 20, height: 20 }}
                      />

                      <Text
                        style={{
                          color: '#fff',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                      <Text
                        style={{
                          color: '#6CF926',
                          fontSize: 12,
                          ...globalStyles.globalFont,
                        }}
                      >
                        | LVL 1
                      </Text>
                    </View>
                  </View>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={16}
                  color="#6CF926"
                  style={{
                    marginRight: 10,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <BottomTabNav />
        </ImageBackground>
        <CustomBottomSheet ref={bottomSheetRef} closable>
          {key === 'full-charge' ? (
            <FullCharge />
          ) : key === 'lumik-taper' ? (
            <LumikTaper />
          ) : key === 'multiplier' ? (
            <Multiplier />
          ) : key === 'energy-capacity' ? (
            <EnergyCapacity />
          ) : key === 'fuel-speed' ? (
            <FeulSpeed />
          ) : null}
        </CustomBottomSheet>
      </View>
    </>
  );
};

export default FuelScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },

  gcCOntainer: {},

  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },

  titleText: {
    fontSize: 24,
    color: '#6CF926',
    ...globalStyles.globalFont,
  },
});

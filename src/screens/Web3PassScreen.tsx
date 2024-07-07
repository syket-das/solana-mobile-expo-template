import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CoinContainer from '../components/global/CoinContainer';
import BottomTabNav from '../components/global/BottomTabNav';
import { globalStyles } from '../styles/globalStyles';

const Web3PassScreen = () => {
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

        <View
          style={{
            marginHorizontal: 20,
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: '#52F81A',
              fontSize: 24,
              ...globalStyles.globalFont,
            }}
          >
            WEB3 PASS
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              marginTop: 10,
              ...globalStyles.globalFont,
            }}
          >
            We assume you've already connected your SOLANA wallet upon logging
            in. To boost your chances of receiving the $INA token airdrop. We
            recommend Minting or Buying Azameina NFT. This NFT is a P2E pass,
            allowing you to earn $INA tokens in the game. Learn more at
            https://example.com
          </Text>

          <TouchableOpacity
            onPress={() => {}}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#31460C',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
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
                source={require('../assets/img/global/gcwg.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text
                  style={{
                    color: '#6CF926',
                    marginLeft: 10,
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  LUMIK POINT REWARDS{' '}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    columnGap: 4,
                    marginLeft: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <Text style={{ color: '#52F81A', fontSize: 20, marginTop: 20 }}>
            YOUR TASKS'S
          </Text>

          <ScrollView
            style={{
              marginTop: 20,
              height: '44%',
              //   backgroundColor: '#16270D',
              borderRadius: 10,
            }}
          >
            <View
              style={{
                width: '100%',
                // height: '100%',
                backgroundColor: '#16270D',
                borderRadius: 10,
                marginBottom: 20,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        fontSize: 18,
                        ...globalStyles.globalFont,
                      }}
                    >
                      CONNECT SOLANA WALLET
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
                          fontSize: 16,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      GO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      CHECK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* progress bar */}
            </View>
            <View
              style={{
                width: '100%',
                // height: '100%',
                backgroundColor: '#16270D',
                borderRadius: 10,
                marginBottom: 20,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        fontSize: 18,
                        ...globalStyles.globalFont,
                      }}
                    >
                      BUY AZAMEINA NFT{' '}
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
                          fontSize: 16,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      GO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      CHECK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* progress bar */}
            </View>
            <View
              style={{
                width: '100%',
                // height: '100%',
                backgroundColor: '#16270D',
                borderRadius: 10,
                marginBottom: 20,
                paddingVertical: 10,
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginLeft: 10,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: '#6CF926',
                        marginLeft: 10,
                        fontSize: 18,
                        ...globalStyles.globalFont,
                      }}
                    >
                      BUY LUMIK TAPPER NFT{' '}
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
                          fontSize: 16,
                          ...globalStyles.globalFont,
                        }}
                      >
                        500
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      GO
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {}}
                    style={{
                      backgroundColor: '#1E3C0F',

                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 5,
                      marginRight: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                  >
                    <Text
                      style={{
                        color: '#6CF926',
                        fontSize: 16,
                        ...globalStyles.globalFont,
                      }}
                    >
                      CHECK
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              {/* progress bar */}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <BottomTabNav />
    </View>
  );
};

export default Web3PassScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});

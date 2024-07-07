import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';

const ForceTopTab = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('task');

  return (
    <View
      style={{
        width: '90%',
        marginHorizontal: '5%',
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: '#16270D',
          borderRadius: 10,
          marginTop: 20,

          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 10,
        }}
      >
        <TouchableOpacity
          onPress={() => setSelected('task')}
          style={{
            backgroundColor: selected === 'task' ? '#6CF926' : 'transparent',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: '#52F81A',
              fontSize: 18,
              ...globalStyles.globalFont,
            }}
          >
            TASK
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('leagues')}
          style={{
            backgroundColor: selected === 'leagues' ? '#6CF926' : 'transparent',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: '#52F81A',
              fontSize: 18,
              ...globalStyles.globalFont,
            }}
          >
            LEAGUES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setSelected('team')}
          style={{
            backgroundColor: selected === 'team' ? '#6CF926' : 'transparent',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderRadius: 5,
            flex: 1,
          }}
        >
          <Text
            style={{
              color: '#52F81A',
              fontSize: 18,
              ...globalStyles.globalFont,
            }}
          >
            TEAM
          </Text>
        </TouchableOpacity>
      </View>

      {selected === 'task' ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: '65%',
            //   backgroundColor: '#16270D',
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('JoinSocials');
            }}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
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
                source={require('../../assets/img/force/join-socials.png')}
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
                  JOIN OUR SOCIALS
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
                    source={require('../../assets/img/home/gcwg.png')}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500000
                  </Text>
                </View>
              </View>
            </View>
            {/* <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text> */}
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#6CF926"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Web3Pass');
            }}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
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
                source={require('../../assets/img/force/web3-pass.png')}
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
                  WEB3.0 PASS
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
                    source={require('../../assets/img/home/gcwg.png')}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500000
                  </Text>
                </View>
              </View>
            </View>
            {/* <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text> */}
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#6CF926"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DailyTask');
            }}
            style={{
              width: '100%',
              height: 60,
              backgroundColor: '#16270D',
              borderRadius: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
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
                source={require('../../assets/img/force/daily-task.png')}
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
                  DAILY TASK
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
                    source={require('../../assets/img/home/gcwg.png')}
                    style={{ width: 20, height: 20 }}
                  />

                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 16,
                      ...globalStyles.globalFont,
                    }}
                  >
                    500000
                  </Text>
                </View>
              </View>
            </View>
            {/* <Text style={{ color: '#6CF926', marginRight: 10 }}>{'>'}</Text> */}
            <Ionicons
              name="chevron-forward"
              size={20}
              color="#6CF926"
              style={{ marginRight: 10 }}
            />
          </TouchableOpacity>
        </ScrollView>
      ) : selected === 'leagues' ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: '65%',
            // backgroundColor: '#16270D',
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
                <Image
                  source={require('../../assets/img/global/league/rock.png')}
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
                    ROCK{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
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
                <Image
                  source={require('../../assets/img/global/league/wood.png')}
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
                    WOOD{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
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
                <Image
                  source={require('../../assets/img/global/league/bronze.png')}
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
                    BRONZE{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
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
                <Image
                  source={require('../../assets/img/global/league/silver.png')}
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
                    SILVER{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
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
                <Image
                  source={require('../../assets/img/global/league/gold.png')}
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
                    GOLD{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
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
                <Image
                  source={require('../../assets/img/global/league/platinum.png')}
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
                    PLATINUM{' '}
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3B10',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#52F81A',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#52F81A',
                  borderRadius: 10,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      ) : selected === 'team' ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: '65%',
            // backgroundColor: '#16270D',
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
                <Image
                  source={require('../../assets/img/global/team.png')}
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
                    INVITE 1
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
                      source={require('../../assets/img/home/gcwg.png')}
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
                    fontSize: 18,
                    ...globalStyles.globalFont,
                  }}
                >
                  CLAIM
                </Text>
              </TouchableOpacity>
            </View>
            {/* progress bar */}

            <View
              style={{
                width: '95%',
                height: 20,
                backgroundColor: '#1E3C0F',
                borderRadius: 10,
                borderWidth: 2,
                borderColor: '#6CF926',
                alignSelf: 'center',
                marginTop: 10,
              }}
            >
              <View
                style={{
                  width: `50%`,
                  height: '100%',
                  backgroundColor: '#6CF926',
                  borderRadius: 10,
                }}
              ></View>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default ForceTopTab;

const styles = StyleSheet.create({});

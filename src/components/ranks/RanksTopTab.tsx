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

const RanksTopTab = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('top');

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
          onPress={() => setSelected('top')}
          style={{
            backgroundColor: selected === 'top' ? '#6CF926' : 'transparent',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#52F81A', fontWeight: 'bold' }}>TOP 1111</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('standing')}
          style={{
            backgroundColor:
              selected === 'standing' ? '#6CF926' : 'transparent',
            width: '30%',
            justifyContent: 'center',
            alignItems: 'center',
            height: 30,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: '#52F81A', fontWeight: 'bold' }}>
            STANDINGS
          </Text>
        </TouchableOpacity>
      </View>

      {selected === 'top' ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: '20%',
            // backgroundColor: '#16270D',
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : selected === 'standing' ? (
        <ScrollView
          style={{
            marginTop: 20,
            height: '20%',
            //   backgroundColor: '#16270D',
            borderRadius: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
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
                source={require('../../assets/img/rank/1.png')}
                style={{ width: 40, height: 40 }}
              />
              <View>
                <Text style={{ color: '#6CF926', marginLeft: 10 }}>
                  STEVE JOBS
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

                  <Text style={{ color: '#fff', fontSize: 12 }}>500000</Text>
                  <Text style={{ color: '#6CF926', fontSize: 12 }}>
                    | TEAM: 100K
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default RanksTopTab;

const styles = StyleSheet.create({});

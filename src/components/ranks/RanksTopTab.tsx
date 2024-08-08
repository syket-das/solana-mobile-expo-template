import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from '../../styles/globalStyles';
import Rank1 from '../../assets/img/rank/1.png';
import Rank2 from '../../assets/img/rank/1.png';
import StatCard from '../global/StatCard';
import useUserStore from '../../store/userStore';

const RanksTopTab = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = React.useState('top');
  const { users, error, getAllUsers }: any = useUserStore((state) => state);

  const fetchUsers = async () => {
    await getAllUsers();
  };

  React.useEffect(() => {
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <View style={globalStyles.tabContainer}>
        <TouchableOpacity
          onPress={() => setSelected('top')}
          style={{
            backgroundColor: selected === 'top' ? '#6CF92625' : 'transparent',
            ...styles.tabContentContainer,
          }}
        >
          <Image
            source={require('../../assets/img/rank/top-players.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.tabTitle}>TOP 1111</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelected('standing')}
          style={{
            backgroundColor:
              selected === 'standing' ? '#6CF92625' : 'transparent',
            ...styles.tabContentContainer,
          }}
        >
          <Image
            source={require('../../assets/img/rank/standings.png')}
            style={{ width: 24, height: 24 }}
          />
          <Text style={styles.tabTitle}>STANDINGS</Text>
        </TouchableOpacity>
      </View>

      {selected === 'top' ? (
        <ScrollView
          style={{
            height: '30%',
          }}
        >
          <View
            style={{
              marginTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {users.map((user: any, index: number) => (
              <StatCard
                key={index}
                isClickable={false}
                cardTitle={'STEVE JOBS ' + index}
                cardImage={Rank1}
                cardSubTitle={
                  <View style={styles.cardSubTitleContainer}>
                    <Image
                      source={require('../../assets/img/home/gcwg.png')}
                      style={styles.cardSubTitleImage}
                    />

                    <Text style={styles.cardSubTitle}>
                      {user?.points?.points}
                    </Text>
                  </View>
                }
              />
            ))}
          </View>
        </ScrollView>
      ) : selected === 'standing' ? (
        <ScrollView
          style={{
            height: '40%',
          }}
        >
          <View
            style={{
              marginTop: 16,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            <StatCard
              isClickable={false}
              cardTitle="STEVE JOBS 2"
              cardImage={Rank1}
              cardSubTitle={
                <View style={styles.cardSubTitleContainer}>
                  <Image
                    source={require('../../assets/img/home/gcwg.png')}
                    style={styles.cardSubTitleImage}
                  />

                  <Text style={styles.cardSubTitle}>500000</Text>
                </View>
              }
            />
          </View>
        </ScrollView>
      ) : null}
    </View>
  );
};

export default RanksTopTab;

const styles = StyleSheet.create({
  tabContentContainer: {
    width: '50%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    height: 30,
    borderRadius: 4,
    flex: 1,
  },
  tabTitle: {
    color: '#52F81A',
    fontSize: 18,
    ...globalStyles.globalFont,
  },
  cardSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  cardSubTitleImage: {
    width: 20,
    height: 20,
  },
  cardSubTitle: {
    color: '#fff',
    ...globalStyles.cardSubTitleText,
  },
});

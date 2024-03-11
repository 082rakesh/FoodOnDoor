import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ALL_RESTURANTS} from '../utils/Constants';
import {Restaurant} from '../model/Restaurants';
import RestaurantCard from '../component/RestaurantCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/Navigator';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const RestaurantScreen = ({navigation}: Props) => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestraunts();
    return () => {
      console.log('component will unmount effect in list screen');
    };
  }, []);

  const getRestraunts = async () => {
    const response = await fetch(ALL_RESTURANTS);
    const jsonResponse = await response.json();
    const resturants =
      jsonResponse.data?.cards[1].card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestrauntList(resturants);
  };

  const navigateToDetails = useCallback(
    (infoID: string) => {
      navigation.navigate('Details', {
        resID: infoID,
      });
    },
    [navigation],
  );

  /*
  let startTime = 0;
  let elapsedTime = 0;
  let timerInterval;

  const stopWatch = () => {
    startTime = Date.now();
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      console.log('time is ', timeToString(elapsedTime));
    }, 1000);
  };

  function timeToString(time) {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${minutes}:${seconds}:${milliseconds}`;
  }
*/
  return (
    <View style={styles.container}>
      <FlatList
        data={restrauntList}
        renderItem={itemData => {
          return (
            <RestaurantCard
              resInfo={itemData.item.info}
              onPressHandle={() => navigateToDetails(itemData.item.info.id)}
            />
          );
        }}
        keyExtractor={item => {
          return item.info.id;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default RestaurantScreen;

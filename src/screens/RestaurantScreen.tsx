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

  // const navigateToDetails = (infoID: string) => {
  //   navigation.navigate('Details', {
  //     resID: infoID,
  //   });
  // };

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

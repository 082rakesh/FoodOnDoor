import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Restaurant} from '../model/Restaurants';
import RestaurantCard from '../component/RestaurantCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {HomeStackParamList} from '../navigation/Navigator';
import {useRestrauntsList} from '../network/hooks/useRestrauntsList';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const RestaurantScreen = ({navigation}: Props) => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);

  const restrauntsList: Restaurant[] = useRestrauntsList();

  useMemo(() => {
    setRestrauntList(restrauntsList);
  }, [restrauntsList]);

  const navigateToDetails = useCallback(
    (infoID: string) => {
      navigation.navigate('Details', {
        resID: infoID,
      });
    },
    [navigation],
  );

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

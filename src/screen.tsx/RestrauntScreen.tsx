import React, {useEffect, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {ALL_RESTURANTS} from '../utils/Constants';
import {Restaurant} from '../model/Restraunts';
import RestrauntCard from '../component/RestrauntCard';

const RestrauntScreen = () => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);

  useEffect(() => {
    getRestraunts();
  }, [restrauntList]);

  const getRestraunts = async () => {
    const response = await fetch(ALL_RESTURANTS);
    const jsonResponse = await response.json();
    const resturants =
      jsonResponse.data?.cards[1].card.card.gridElements.infoWithStyle
        .restaurants;
    setRestrauntList(resturants);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restrauntList}
        renderItem={itemData => {
          return <RestrauntCard resInfo={itemData.item.info} />;
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
    backgroundColor: 'white',
  },
});

export default RestrauntScreen;

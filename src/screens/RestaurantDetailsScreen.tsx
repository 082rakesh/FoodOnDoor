import {StyleSheet, View, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import ResMenu from '../component/ResMenu';
import {CATAGORY, RESTUARANTS_DETAILS} from '../utils/Constants';
import {Info, Root} from '../model/MenuCard';

const RestaurantDetailsScreen = () => {
  const [menuList, setMenuList] = useState<Info[]>([]);

  const route = useRoute();
  const {resID} = route.params;

  const fetchMenuList = useCallback(async () => {
    const response = await fetch(RESTUARANTS_DETAILS + resID);
    const jsonResponse: Root = await response.json();

    const filteredCardList =
      jsonResponse.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards?.filter(
        card => card.card?.card['@type'] === CATAGORY,
      );

    const cardList = filteredCardList.map(item => item.card.card);
    setMenuList(cardList);
  }, [resID]);

  useEffect(() => {
    fetchMenuList();
  }, [fetchMenuList]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={menuList}
        renderItem={card => {
          return <ResMenu cardData={card.item} />;
        }}
        key={Math.random()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    rowGap: 20,
  },
});
export default RestaurantDetailsScreen;

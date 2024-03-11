import {StyleSheet, View, FlatList} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import ResMenu from '../component/ResMenu';
import {Card4} from '../model/MenuCard';
import {useRestaunrantsDetails} from '../network/hooks/useRestaunrantsDetails';

const RestaurantDetailsScreen = () => {
  const [menuList, setMenuList] = useState<Card4[]>([]);

  const route = useRoute();
  const {resID} = route.params;

  const list1 = useRestaunrantsDetails(resID);

  useMemo(() => {
    setMenuList(list1);
  }, [list1]);

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

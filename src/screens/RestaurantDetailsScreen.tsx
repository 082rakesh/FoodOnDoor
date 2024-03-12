import {StyleSheet, View, FlatList} from 'react-native';
import React, {useMemo, useState} from 'react';
import {useRoute, useTheme} from '@react-navigation/native';
import ResMenu from '../component/ResMenu';
import {Card4} from '../model/MenuCard';
import {useRestaunrantsDetails} from '../network/hooks/useRestaunrantsDetails';

const RestaurantDetailsScreen = () => {
  const [menuList, setMenuList] = useState<Card4[]>([]);
  const theme = useTheme();
  const {resID} = useRoute().params;

  const updatedList = useRestaunrantsDetails(resID);

  useMemo(() => {
    setMenuList(updatedList);
  }, [updatedList]);

  return (
    <View
      style={
        (styles.mainContainer, {backgroundColor: theme.colors.background})
      }>
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

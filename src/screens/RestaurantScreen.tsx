import React, {useCallback, useMemo, useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Restaurant} from '../model/Restaurants';
import RestaurantCard from '../component/RestaurantCard';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ResStackParamList} from '../navigation/Navigator';
import {useRestrauntsList} from '../network/hooks/useRestrauntsList';
import {useTheme} from '@react-navigation/native';

type HomeScreenNavigationProp = NativeStackNavigationProp<
  ResStackParamList,
  'Restaurant'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};
const RestaurantScreen = ({navigation}: Props) => {
  const [restrauntList, setRestrauntList] = useState<Restaurant[]>([]);
  // const [isError, setIsError] = useState(false);

  const theme = useTheme();
  const restrauntsList: Restaurant[] = useRestrauntsList();
  // const isAPIFailed: boolean = useRestrauntsList();

  useMemo(() => {
    // isAPIFailed ? setIsError(isAPIFailed) : setRestrauntList(restrauntsList);
    setRestrauntList(restrauntsList);
  }, [restrauntsList]);

  const navigateToDetails = useCallback(
    (infoID: string) => {
      navigation.navigate('RestaurantDetails', {
        resID: infoID,
      });
    },
    [navigation],
  );

  return (
    <View
      style={(styles.container, {backgroundColor: theme.colors.background})}>
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
  },
});

export default RestaurantScreen;

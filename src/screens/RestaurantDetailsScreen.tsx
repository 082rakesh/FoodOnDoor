import {StyleSheet, View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
// import {useRoute} from '@react-navigation/native';
import ResMenu from '../component/ResMenu';

const RestaurantDetailsScreen = () => {
  // const route = useRoute();
  // const {itemId, otherData} = route.params;

  const listRes = ['1', '2', '1'];

  useEffect(() => {
    return () => {
      console.log('component will unmount effect in details screen');
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={listRes}
        renderItem={() => {
          return <ResMenu />;
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

import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const RestaurantDetailsScreen = ({navigation}) => {
  const onPresshandler = () => {
    navigation.navigate('Details');
  };

  useEffect(() => {
    console.log('use effect in details');

    return () => {
      console.log('component will unmount effect in details screen');
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <Text>This is details screen</Text>
      <TouchableOpacity onPress={onPresshandler}>
        <Text>Go to details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D3D3D3',
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
});
export default RestaurantDetailsScreen;

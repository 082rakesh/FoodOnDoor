import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Button from '../ui-toolkit/Button';
import {useAppNavigation} from '../navigation/useAppNavigation';


const PostDetailsScreen = () => {
  const navigation = useAppNavigation();
  const {height, width} = Dimensions.get('window');

  const onPrimaryPressHandler = () => {
    console.log('first button presses');
    navigation.navigate('TransactionStack');
  };
  return (
    <View style={styles.container}>
      <Button type="primary" onPress={onPrimaryPressHandler}>
        <Text>Primary Button</Text>
      </Button>

      <Button type="secondary">
        <Text>Secondary Button</Text>
      </Button>

      <Button type="link">
        <Text>Link Button</Text>
      </Button>

      <Button type="largePrimary">
        <Text>Large Primary Button</Text>
      </Button>

      <Button type="largeSecondary">
        <Text>Large Secondary Button</Text>
      </Button>

      <Button type="primary">
        <Text>Primary custom Button</Text>
      </Button>
    </View>
  );
};

export default PostDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    rowGap: 20,
  },
  primaryStyle: {
    borderRadius: 5,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
  },
  largePrimaryStyle: {
    borderRadius: 5,
    backgroundColor: 'red',
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  secondaryStyle: {
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
  },
  largeSecondaryStyle: {
    borderRadius: 8,
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  linkStyle1: {
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: 'transparent',
    padding: 10,
  },
});

import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useTheme} from '@react-navigation/native';
import Text from '../component/Text';

const PostScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <Text style={{color: theme.colors.text}} type="heading">
        This is a Post screen
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PostScreen;

import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';

const ResMenuItem = () => {
  return (
    <View style={styles.cardCOntainer}>
      <View style={{padding: 5}}>
        <Text>McChicken Burger</Text>
        <Text>134.40</Text>
        <Text>4 start rating</Text>
      </View>
      <View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://cdn.britannica.com/08/177308-050-94D9D6BE/Food-Pizza-Basil-Tomato.jpg',
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardCOntainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    marginBottom: 5,
  },
  imageStyle: {
    width: 100,
    height: 80,
  },
});

export default ResMenuItem;

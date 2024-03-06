import {StyleSheet, View, Text, Image} from 'react-native';
import React from 'react';
import {Info} from '../model/MenuCard';
import {IMG_BASE_URL} from '../utils/Constants';

interface Props {
  resInfo: Info;
}
const ResMenuItem = ({resInfo}: Props) => {
  const {name, price, imageId, description} = resInfo;
  return (
    <View style={styles.topContainer}>
      <View style={styles.cardCOntainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.nameStyle}>{name}</Text>
          <Text style={styles.priceMarginStyle}>₹ {price / 100}</Text>
          <Text style={styles.textMarginStyle}>{description}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageStyle}
            resizeMode="cover"
            source={{
              uri: IMG_BASE_URL + imageId,
            }}
          />
        </View>
      </View>
      <View style={styles.seperator} />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: 'column',
  },
  cardCOntainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    backgroundColor: '#ffffff',
    columnGap: 10,
  },
  descriptionContainer: {
    padding: 5,
    flex: 3.5,
  },
  imageContainer: {
    flex: 2.5,
  },
  imageStyle: {
    width: '100%',
    height: '90%',
    marginBottom: 5,
    marginTop: 5,
  },
  seperator: {
    height: 1,
    backgroundColor: '#000000',
    opacity: 0.5,
    marginLeft: 10,
    marginRight: 10,
  },
  priceMarginStyle: {
    marginBottom: 10,
    fontSize: 16,
  },
  textMarginStyle: {
    marginBottom: 10,
    fontSize: 14,
  },
  nameStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default ResMenuItem;

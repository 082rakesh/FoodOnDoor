import {Image, StyleSheet, View, Text} from 'react-native';
import React, {FC} from 'react';
import {Info} from '../model/Restraunts';
import {IMG_BASE_URL} from '../utils/Constants';

interface Props {
  resInfo: Info;
}
const RestrauntCard: FC<Props> = ({resInfo}) => {
  const {name, avgRating, cuisines, cloudinaryImageId, areaName, costForTwo} =
    resInfo;
  const imageUrl: string = IMG_BASE_URL + cloudinaryImageId;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imageStyle}
          resizeMode="cover"
          source={{uri: imageUrl}}
        />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.resNameStyle}>{name}</Text>
        <Text style={styles.avgRating}>{avgRating} rating</Text>
        <Text style={styles.cuisinesStyle}>{cuisines.join(', ')}</Text>
        <View style={styles.locationStyle}>
          <Text>{areaName}</Text>
          <Text>{costForTwo}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 20,
    borderRadius: 8,
    backgroundColor: '#D3D3D3',
    margin: 5,
  },
  imageContainer: {
    flex: 2,
    margin: 5,
  },
  detailsContainer: {
    flex: 3,
    marginTop: 10,
    rowGap: 5,
    marginRight: 5,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  resNameStyle: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  locationStyle: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cuisinesStyle: {
    fontSize: 14,
  },
  avgRating: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RestrauntCard;

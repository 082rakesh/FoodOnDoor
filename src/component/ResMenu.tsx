import {View, Pressable, FlatList, Image, Text, StyleSheet} from 'react-native';
import React, {useCallback, useState} from 'react';
import ResMenuItem from './ResMenuItem';
import {Card4} from '../model/MenuCard';

type Props = {
  cardData: Card4;
};
const ResMenu = ({cardData}: Props) => {
  const [isShown, setIsShown] = useState(true);
  const {title, itemCards} = cardData;

  const onPresshandler = useCallback(() => {
    setIsShown(!isShown);
  }, [isShown]);

  return (
    <View>
      <Pressable onPress={onPresshandler}>
        <View style={styles.headerView}>
          <Text style={styles.headerTextStyle}>
            {title} ({itemCards.length})
          </Text>
          <Image
            style={styles.imageStyle}
            source={{
              uri: 'https://toppng.com/uploads/preview/free-down-arrow-icon-vector-small-black-arrow-icon-11553389151sgcelietbm.png',
            }}
          />
        </View>
      </Pressable>
      {isShown && (
        <FlatList
          data={itemCards}
          renderItem={item => {
            return <ResMenuItem resInfo={item.item.card.info} />;
          }}
          key={Math.random()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  imageStyle: {
    width: 20,
    height: 20,
    marginRight: 15,
    marginTop: 15,
  },
  headerTextStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 10,
    paddingTop: 10,
  },
});

export default React.memo(ResMenu);

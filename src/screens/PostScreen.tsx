import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useTheme} from '@react-navigation/native';
import Text from '../ui-toolkit/Text';
import {Post} from '../model/Post';
import {useSelector} from 'react-redux';
import {fetchPosts} from '../redux/postService';
import {MainState, useAppDispatch} from '../redux/appStore';
import CardView from '../ui-toolkit/CardView';
import {useAppNavigation} from '../navigation/useAppNavigation';

const PostScreen = () => {
  const dispatch = useAppDispatch();

  const posts: Post[] = useSelector((store: MainState) => store.post.posts);
  const postsStatus = useSelector((store: MainState) => store.post.status);
  const navigation = useAppNavigation();
  const theme = useTheme();

  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts());
    }
  }, [postsStatus, dispatch]);

  const onPressHandle = () => {
    navigation.navigate('PostDetails');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={item => {
          return (
            <CardView onPress={onPressHandle}>
              <Text style={{color: theme.colors.text}} type="primary">
                {item.item.title}
              </Text>
            </CardView>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    marginBottom: 5,
    margin: 15,
  },
});

export default PostScreen;

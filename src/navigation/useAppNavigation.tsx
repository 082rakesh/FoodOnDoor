import {NavigationProp, useNavigation} from '@react-navigation/native';
import {PostStackParamList} from './Navigator';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<PostStackParamList>>();
};

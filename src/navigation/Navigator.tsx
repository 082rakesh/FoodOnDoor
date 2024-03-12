/**
 *  Author: Rakesh
 * Objective: Used for navigation between screens.
 * It has used native stack navigation for navigation and has option to customize header,
 * title and other props for views.
 */
import React from 'react';
import {
  NavigationContainer,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import Cart from '../component/Cart';
import PostScreen from '../screens/PostScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useColorScheme} from 'react-native';
import {darkTheme, defaultTheme} from '../themes/Theme';
import {DARK_THEME_TYPE} from '../utils/Constants';

// add required screen setting like whether header shown or not etc..
const screenOption = {
  gestureEnabled: false,
  headerShown: true,
  headerStyle: {backgroundColor: '#D3D3D3D3'},
  headerRight: () => <Cart />,
};

export type ResStackParamList = {
  Home: undefined;
  Details: {resID: string};
};

export type RootStackParamList = {
  Restaurant: NavigatorScreenParams<ResStackParamList>;
};

/* Parameter is not a mandatory. It only requires, if you need to pass some param along with route */
// const RootStack = createNativeStackNavigator<RootStackParamList>();
// const HomeStack = createNativeStackNavigator<HomeStackParamList>();

// const RootStack = createNativeStackNavigator();
const RestaurantsStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RestaurantsStackScreens = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="RestaurantsScreen"
      screenOptions={screenOption}>
      <RestaurantsStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{title: 'Restaurants'}}
      />
      <RestaurantsStack.Screen
        name="Details"
        component={RestaurantDetailsScreen}
        options={{title: 'Restaurants Details'}}
      />
    </RestaurantsStack.Navigator>
  );
};

const PostStackScreens = () => {
  return (
    <PostStack.Navigator initialRouteName="Post" screenOptions={screenOption}>
      <PostStack.Screen
        name="PostScreen"
        component={PostScreen}
        options={{title: 'Post'}}
      />
    </PostStack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="RestaurantsTab"
        component={RestaurantsStackScreens}
        options={{title: 'Restaurants'}}
      />
      <Tab.Screen
        name="PostTab"
        component={PostStackScreens}
        options={{title: 'Post'}}
      />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === DARK_THEME_TYPE ? darkTheme : defaultTheme}>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

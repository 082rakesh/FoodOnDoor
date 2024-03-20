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
import PostDetailsScreen from '../screens/PostDetailsScreen';
import TransactionScreen from '../screens/TransactionScreen';

// add required screen setting like whether header shown or not etc..
const screenOption = {
  gestureEnabled: false,
  headerShown: true,
  headerStyle: {backgroundColor: '#D3D3D3D3'},
  headerRight: () => <Cart />,
};

export type ResStackParamList = {
  Restaurant: undefined;
  RestaurantDetails: {resID: string};
};

export type PostStackParamList = {
  Post: undefined;
  PostDetails: {id: string} | undefined;
};

export type RootStackParamList = {
  Restaurant: NavigatorScreenParams<ResStackParamList>;
  Post: NavigatorScreenParams<PostStackParamList>;
  PostDetails: NavigatorScreenParams<PostStackParamList>;
};

/* Parameter is not a mandatory. It only requires, if you need to pass some param along with route */
// const RootStack = createNativeStackNavigator<RootStackParamList>();
// const HomeStack = createNativeStackNavigator<HomeStackParamList>();

// const MainStack = createNativeStackNavigator();
// const RestaurantsStack = createNativeStackNavigator<ResStackParamList>();
// const PostStack = createNativeStackNavigator<PostStackParamList>();
// const TransactionStack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

const MainStack = createNativeStackNavigator();

// these stack is responsible to load tabs
const RestaurantsStack = createNativeStackNavigator();
const PostStack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator(); // Tab navigator

const TransactionStack = createNativeStackNavigator();

const RestaurantsStackScreens = () => {
  return (
    <RestaurantsStack.Navigator
      initialRouteName="Restaurant"
      screenOptions={screenOption}>
      <RestaurantsStack.Screen
        name="Restaurant"
        component={RestaurantScreen}
        options={{title: 'Restaurants'}}
      />
      <RestaurantsStack.Screen
        name="RestaurantDetails"
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
        name="Post"
        component={PostScreen}
        options={{title: 'Post'}}
      />
      <PostStack.Screen
        name="PostDetails"
        component={PostDetailsScreen}
        options={{title: 'Post Details'}}
      />
    </PostStack.Navigator>
  );
};

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        name="RestaurantsTab"
        component={RestaurantsStackScreens}
      />
      <BottomTab.Screen
        name="PostTab"
        component={PostStackScreens}
        options={{title: 'Post'}}
      />
    </BottomTab.Navigator>
  );
};

const TransactionStackScreen = () => {
  return (
    <TransactionStack.Navigator screenOptions={{headerShown: false}}>
      <TransactionStack.Screen
        name="Transaction"
        component={TransactionScreen}
      />
    </TransactionStack.Navigator>
  );
};

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{headerShown: false}}>
      <MainStack.Screen name="TabStack" component={BottomTabNavigator} />
      <MainStack.Screen
        name="TransactionStack"
        component={TransactionStackScreen}
        options={{
          headerShown: true,
          title: 'Transactions',
          headerBackTitle: 'Post Details',
        }}
      />
    </MainStack.Navigator>
  );
};

const AppNavigation = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer
      theme={scheme === DARK_THEME_TYPE ? darkTheme : defaultTheme}>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;

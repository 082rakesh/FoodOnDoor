/**
 *  Author: Rakesh
 * Objective: Used for navigation between screens.
 * It has used snative tack navigation for navigation and has option to customize header,
 * title and other props for views.
 */
import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
// add required screen setting like whether header shown or not etc..
const rootScreenOption = {
  gestureEnabled: false,
  headerShown: false,
};

const screenOption = {
  gestureEnabled: false,
  headerShown: true,
  headerStyle: {backgroundColor: '#D3D3D3D3'},
};

export type HomeStackParamList = {
  Home: undefined;
  Details: {resID: string};
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

/* Parameter is not a mandatory. It only requires, if you need to pass some param along with route */
// const RootStack = createNativeStackNavigator<RootStackParamList>();
// const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const RootStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home" screenOptions={screenOption}>
      <HomeStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{title: 'Restaurants'}}
      />
      <HomeStack.Screen
        name="Details"
        component={RestaurantDetailsScreen}
        options={{title: 'Restaurants Details'}}
      />
    </HomeStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={rootScreenOption}>
      <RootStack.Screen name="HomeScreen" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

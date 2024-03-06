import React from 'react';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RestaurantScreen from '../screens/RestaurantScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
// add required screen setting like whether header shown or not etc..
export type ScreenOption = {
  gestureEnabled: false;
  headerShown: false;
};

export type HomeStackParamList = {
  RestrauntScreen: undefined;
  RestaurantDetailsScreen: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
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
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="HomeScreen" component={HomeNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;

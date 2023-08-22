import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from '../screens/SearchScreen';
import ImageListScreen from '../screens/ImageListScreen';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Photos" component={SearchScreen} />
      <HomeStack.Screen name={'Everyone’s photos'} component={ImageListScreen} initialParams={{ searchTerm: '' }} />
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigator;

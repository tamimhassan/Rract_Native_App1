import React from 'react';
import {} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Feed from '../screen/Feed';
import ProfileStack from '../screen/ProfileStack';
import SearchScreen from '../screen/SearchScreen';
import AddBookScreen from '../screen/AddBookScreen';
import FavouriteBookListScreen from '../screen/FavouriteBookListScreen';

import AddIcon from '../components/AddIcon';
import {
  HomeIcon,
  SearchIcon,
  ProfileIcon,
  FavouriteIcon,
} from '../assects/icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{ height: 100 }}
      tabBarOptions={{
        activeBackgroundColor: '#111',
        inactiveBackgroundColor: '#111',
        activeTintColor: '#7F58FF',
        inactiveTintColor: '#FF1',
        labelPosition: 'below-icon',
        labelStyle: { display: 'none' },
        style: { height: 60 },
      }}>
      <Tab.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <HomeIcon color={color} size={focused ? 28 : size} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchBook"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <SearchIcon color={color} size={focused ? 28 : size} />
          ),
        }}
      />
      <Tab.Screen
        name="AddBook"
        component={AddBookScreen}
        options={{
          tabBarIcon: () => <AddIcon />,
        }}
      />
      <Tab.Screen
        name="FavouriteBooks"
        component={FavouriteBookListScreen}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FavouriteIcon color={color} size={focused ? 28 : size} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <ProfileIcon color={color} size={focused ? 28 : size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;

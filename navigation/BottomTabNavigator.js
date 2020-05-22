import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TabBarIcon from '../components/TabBarIcon';
import AddMovie from '../screens/AddMovie';
import MovieList from '../screens/MovieList';
import MovieDetailsScreen from '../screens/MovieDetailsScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

const MoviesStackNavigator = createStackNavigator();


function MoviesStack() {
  return (
    <MoviesStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <MoviesStackNavigator.Screen name="Movies" component={MovieList} />
      <MoviesStackNavigator.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </MoviesStackNavigator.Navigator>
  );
}

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={MoviesStack}
        options={{
          title: 'Movie List',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-list" />,
        }}
      />
      <BottomTab.Screen
        name="Add"
        component={AddMovie}
        options={{
          title: 'Add Movie',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Movie List';
    case 'Add':
      return 'Add Movie';
  }
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import LinkingConfiguration from './navigation/LinkingConfiguration';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import { MovieProvider } from './hooks/MovieProvider'

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();


  if (!isLoadingComplete) {
    return null;
  } else {
    return (

      // { {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      // <NavigationContainer linking={LinkingConfiguration}>
      //   <Stack.Navigator>
      //     <Stack.Screen name="Root" component={BottomTabNavigator} />
      //   </Stack.Navigator>
      // </NavigationContainer>

      <NavigationContainer linking={LinkingConfiguration}>
        <MovieProvider>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AuthStack" component={AuthStackNavigator} />
            <Stack.Screen name="RootStack" component={BottomTabNavigator} />
          </Stack.Navigator>
        </MovieProvider>
      </NavigationContainer>




    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent:'center',
//     alignItems:'center'
//   },
// });

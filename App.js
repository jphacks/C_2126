import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitiateScreen from './screens/InitiateScreen';
import LoginScreen from './screens/LoginScreen';
// import AddItemScreen from './screens/AddItemScreen';
import ListPageScreen from './screens/ListPageScreen';
import Info_page from './screens/date_page';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>


        {/* <Stack.Navigator initialRouteName="main">
          <Stack.Screen name='all' component={ListPageScreen} />
          <Stack.Screen name='Initiate' component={InitiateScreen} />
          <Stack.Screen name='main' component={Info_page} />

        </Stack.Navigator> */}

        <Tab.Navigator initialRouteName="main">
          <Tab.Screen name='all' component={ListPageScreen} />
           <Tab.Screen name='Login' component={LoginScreen} />
          <Tab.Screen name='Initiate' component={InitiateScreen} />
          <Tab.Screen name='main' component={Info_page} />

        </Tab.Navigator>

      </NavigationContainer>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

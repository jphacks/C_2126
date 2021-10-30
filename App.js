import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, } from 'react-native';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import InitiateScreen from './screens/InitiateScreen';
import AddItemScreen from './screens/AddItemScreen';
import ListPageScreen from './screens/ListPageScreen';
import Info_page from './screens/date_page';


const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>

      <NavigationContainer>




        <Tab.Navigator initialRouteName="初期設定">
          <Tab.Screen name='追加' component={AddItemScreen} />
          <Tab.Screen name='日数' component={Info_page} />
          <Tab.Screen name='在庫' component={ListPageScreen} />
          <Tab.Screen name='初期設定' component={InitiateScreen} />

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

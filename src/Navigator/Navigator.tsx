import React from 'react';
import {
  RootStackNames,
  RootStackParamlist,
} from './Constants/RootStackParamLists';
import ScreenHome from '../Screens/ScreenHome/ScreenHome';
import ScreenAddNewItem from '../Screens/ScreenAddNewItem/ScreenAddNewItem';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

const Navigation = createNativeStackNavigator<RootStackParamlist>();

function Navigator() {
  return (
    <NavigationContainer>
      <Navigation.Navigator
        initialRouteName={RootStackNames.screenHome}
        screenOptions={{headerShown: false}}>
        <Navigation.Screen
          name={RootStackNames.screenHome}
          component={ScreenHome}
        />
        <Navigation.Screen
          name={RootStackNames.screenAddNewItem}
          component={ScreenAddNewItem}
        />
      </Navigation.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;

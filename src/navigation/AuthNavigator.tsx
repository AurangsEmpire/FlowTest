import React from 'react';

// Screens
import Login from '../containers/Login';
import FTUE from '../containers/FTUE';

// stack
import {createStackNavigator} from '@react-navigation/stack';
import {ScreenName} from '../utils/contants';

const Stack = createStackNavigator();

// welcome stack
export const AuthStack = (name: any) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ScreenName.FTUE}
        component={FTUE}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={ScreenName.LOGIN}
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './navigation/StackNavigator';
import Auth from './auth';
export default function App() {


  return (
    <NavigationContainer>
      <Auth />
      <MyStack />
    </NavigationContainer>
  );
}
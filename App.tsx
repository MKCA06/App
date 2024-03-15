import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Bottom from './Bottom';
import RoomComponent from './Room';

const App = () => {
  return (
    <NavigationContainer>
      <RoomComponent />
      <Bottom/>
    </NavigationContainer>
  );
};

export default App;

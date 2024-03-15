import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewMeetingStack from './NewMeetingStack';

const App = () => {
  return (
    <NavigationContainer>
      <NewMeetingStack/>
    </NavigationContainer>
  );
};

export default App;

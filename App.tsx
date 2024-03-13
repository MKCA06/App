import 'react-native-gesture-handler'; // Make sure to import this at the top
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NewMeetingStack from './NewMeetingStack'; // Import your stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <NewMeetingStack />
    </NavigationContainer>
  );
};

export default App;

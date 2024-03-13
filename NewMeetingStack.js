import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import your icon library

// Define your NewMeeting component
const NewMeetingScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Meeting</Text>
    </View>
  );
};

// Create a stack navigator
const Stack = createStackNavigator();

// Define your stack navigator component
const NewMeetingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="NewMeeting"
        component={NewMeetingScreen}
        options={{
          title: 'New Meeting',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};

export default NewMeetingStack;

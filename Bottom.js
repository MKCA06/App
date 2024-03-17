import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GlobalColor } from './src/constants/Colors';
import { GlobalFontSize } from './src/constants/FontSize';

import Home from './src/screens/Home';
import AttendanceAdminNav from './src/screens/AttendanceAdminNav';
import GatePassNavigator from './src/screens/GatePassNavigator';
import OtherApps from './src/screens/OtherApps';

// Import the images from the local paths
import GatePassIcon from './src/assets/Images/identity-card.png';
import OtherAppsIcon from './src/assets/Images/more.png';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#43C6DB',
        tabBarLabelStyle: { fontSize: GlobalFontSize.Error, color: GlobalColor.Primary },   
        tabBarInactiveTintColor: GlobalColor.Primary,   
        tabBarStyle: { height: 70, backgroundColor: 'transparent', borderTopLeftRadius: 15, borderTopRightRadius: 15, paddingBottom: 10 }, 
        tabBarBackground: () => (
          <LinearGradient    
            colors={['#fff', '#fff']} style={{
              height: 80,
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22
            }}
          />
        )
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: 'https://img.icons8.com/dusk/64/000000/home.png' }}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AttendanceAdmin"
        component={AttendanceAdminNav}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Attendance',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={{ uri: 'https://img.icons8.com/dusk/64/000000/calendar.png' }}
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GatePass"
        component={GatePassNavigator}
        options={{
          unmountOnBlur: true,
          tabBarLabel: 'Gatepass',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={GatePassIcon} // Use the imported image
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OtherApps"
        component={OtherApps}
        options={{
          tabBarLabel: 'OtherApps',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={OtherAppsIcon} // Use the imported image
              style={{ width: 30, height: 30, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;

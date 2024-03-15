import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Entypo';
import Material from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import LinearGradient from 'react-native-linear-gradient';
import { GlobalColor } from './src/constants/Colors';
import { GlobalFontSize } from './src/constants/FontSize';

import Home from './src/screens/Home';
import AttendanceAdminNav from './src/screens/AttendanceAdminNav';
import GatePassNavigator from './src/screens/GatePassNavigator';
import OtherApps from './src/screens/OtherApps';
// import CompensationBenifits from '../screens/CompensationAndBenifits/CompensationBenifits';
// import Canteen from '../screens/Canteen/Canteen';

// import EmployeeDirect from '../screens/employeLookUp/EmployeeDirect';
// import EmployeeNavs from './EmployeeNavs';
// import BuisnessTravel from '../screens/Buisness/BuisnessTravel';
// import HospitalNavs from './HospitalNavigator';
// import BusinessNavigator from './BusinessNavigator';
// import CanteeNavigator from './CanteeNavigator';
// import CompensationBenifitsNav from './CompensationBenifitsNav';




const Tab = createBottomTabNavigator();
function Tabs() {
  return (    
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#43C6DB',
      tabBarLabelStyle:{ fontSize:GlobalFontSize.Error, color:GlobalColor.Primary},   
      tabBarInactiveTintColor:GlobalColor.Primary,   
      tabBarStyle:{height:70,backgroundColor:'transparent',borderTopLeftRadius:15,borderTopRightRadius:15,paddingBottom:10,} ,
      tabBarBackground:() =>(
        <LinearGradient    
        colors={['#fff', '#fff']} style={{
          height:80,
          borderTopLeftRadius:22,
          borderTopRightRadius:22
        }}/>
      )
    }}>
      <Tab.Screen name="Home" component={Home} 
        options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="AttendanceAdmin" component={AttendanceAdminNav}
       options={{
        unmountOnBlur:true,
        tabBarLabel: 'Attendance',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-edit" color={color} size={size} />
        ),
        // tabBarStyle: { display: "none" },
      }} 
    />
      <Tab.Screen name="Gatepass" component={GatePassNavigator}
       options={{
        unmountOnBlur:true,
        tabBarLabel: 'Gatepass',
        tabBarIcon: ({ color, size }) => (
          <Material name="perm-contact-cal" color={color} size={size} />
        ),
      }}
       />
      <Tab.Screen name="OtherApps" component={OtherApps} 
        options={{
        tabBarLabel: 'OtherApps',
        tabBarIcon: ({ color, size }) => (
          <Material name="apps" color={color} size={size} />
        ),
      }}/>

      {/* <Tab.Screen name="Canteen" component={CanteeNavigator} 
        options={{
        tabBarLabel: 'Canteen',
        tabBarVisible: false,
        tabBarButton: (props) => null,
        tabBarIcon: ({ color, size }) => (
          <Material name="apps" color={color} size={size} />
        ),
      }}/> */}

      {/* <Tab.Screen name="EmployeeNavs" component={EmployeeNavs}
       options={{
        unmountOnBlur:true,
        tabBarLabel: 'EmployeLookUp',
         tabBarVisible: false,
        tabBarButton: (props) => null,
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="calendar-edit" color={color} size={size} />
        ),
        // tabBarStyle: { display: "none" },
      }} 
    /> */}


    {/* <Tab.Screen name="BuisnessTravel" component={BusinessNavigator} 
        options={{
        tabBarLabel: 'BuisnessTravel',
        
        tabBarVisible: false,
        tabBarButton: (props) => null,
        tabBarIcon: ({ color, size }) => (
          <Material name="apps" color={color} size={size} />
        ),
      }}/> */}
{/* 
    <Tab.Screen name="HospitalNavs" component={HospitalNavs} 
        options={{
        tabBarLabel: 'EmergencyContacts',
         unmountOnBlur:true,
        tabBarVisible: false,
        tabBarButton: (props) => null,
        tabBarIcon: ({ color, size }) => (
          <Material name="apps" color={color} size={size} />
        ),
      }}/>
  <Tab.Screen name="CompensationBenifitsNav" component={CompensationBenifitsNav}  */}
        {/* options={{
        tabBarLabel: 'Payroll',
         unmountOnBlur:true,
        tabBarVisible: false,
        tabBarButton: (props) => null,
        tabBarIcon: ({ color, size }) => (
          <Material name="apps" color={color} size={size} />
        ),
      }}/> */}

      
    </Tab.Navigator>
  );
}
export default Tabs;
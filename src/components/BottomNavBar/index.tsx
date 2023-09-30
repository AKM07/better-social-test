import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Clipboard, Home, MessageCircle, Settings, User} from 'react-native-feather';
import { RootStackParamList } from '../../routes/RouteStackParamList';
import colors from '../../../public/theme/colors';
import HomeScreen from '../../screens/HomeScreen';

interface Menu {
  id: number;
  icon?: any;
  label?: React.ReactNode;
}

interface BottomNavbarProps {
  menu: Menu[];
  activeMenu?: number;
  onClick: (...args: any) => void;
  menuClass?: string;
  activeMenuClass?: string;
  navbarClass?: string;
  labelClass?: string;
}

export const BottomNavbar = () => {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.white,
        },
        tabBarShowLabel:false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              color = colors.green[800];
            } else {
              color = colors.grey[400];
            }

            return <Home color={color} fontSize={14} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.green[800],
          },
          
        }}
      />
      <Tab.Screen
        name="Home2"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              color = colors.green[800];
            } else {
              color = colors.grey[400];
            }

            return <MessageCircle color={color} fontSize={14} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.green[800],
          },
        }}
      />
      <Tab.Screen
        name="Home3"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              color = colors.green[800];
            } else {
              color = colors.grey[400];
            }

            return <Clipboard color={color} fontSize={14} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.green[800],
          },
        }}
      />
      <Tab.Screen
        name="Home4"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => {
            if (focused) {
              color = colors.green[800];
            } else {
              color = colors.grey[400];
            }

            return <User color={color} fontSize={14} />;
          },
          tabBarLabelStyle: {
            fontSize: 14,
            color: colors.green[800],
          },
        }}
      />
    </Tab.Navigator>
  );
};

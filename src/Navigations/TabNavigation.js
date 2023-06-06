import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from '../utility/responsive';
// import NavigationBar from '../Component/NavigationHeader';
import theme from '../utility/theme';
import {Platform} from 'react-native';
import {VectorIcon} from '../components/VectorIcon';
import {
  HomePage,
  Registration,
  Login,
  ForgotPassword,
  MyProfile,
  MyCards,
  MyInsights,
} from '../Screens';
import {HomeNavigation} from './StackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const TabNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'red', // Set the active icon and label color
        inactiveTintColor: 'gray', // Set the inactive icon and label color

        style: {backgroundColor: 'white'},
        labelStyle: {color: 'gray'},
        activeTintColor: 'red',

        activeBackgroundColor: theme.color.primary, // Set the active tab background color
        inactiveBackgroundColor: 'white', // Set the inactive tab background color
        style: {
          borderTopWidth: 1, // Add a border at the top of the bottom tab bar
          borderTopColor: 'gray', // Set the color of the border
          borderTopLeftRadius: 100, // Set the top-left border radius
          borderTopRightRadius: 100, // Set the top-right border radius
        },
        tabStyle: {
          alignItems: 'center', // Center the tab items horizontally
          justifyContent: 'center', // Center the tab items vertically
        },
        // labelStyle: {
        //   fontSize: 12, // Set the font size of the label
        //   marginTop: 4, // Adjust the spacing between the icon and label
        // },
        // iconStyle: {
        //   marginBottom: 4, // Adjust the spacing between the icon and label
        // },
      }}
      screenOptions={{
        tabBarInactiveTintColor: '#999999',
        tabBarActiveTintColor: theme.color.primary,

        tabBarLabelStyle: [
          {
            fontSize: getFontSize(12),
            fontFamily: theme.font.bold,
            fontWeight: '600',
            // paddingTop:"10%",
            // backgroundColor: 'red'
          },
          Platform.OS === 'android' && {
            marginBottom: getResHeight(8),
          },
        ],
        tabBarIconStyle: [
          {
            margin: 0,
          },
          Platform.OS === 'android' && {
            marginTop: getResHeight(4),
          },
        ],
        tabBarStyle: [
          {
            // backgroundColor: theme.color.accent,
            // elevation:4
            shadowColor: '#000',
            shadowOffset: {
              width: getResWidth(2),
              height: getResWidth(2),
            },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 15,
            // backgroundColor:""
          },
          Platform.OS === 'android' && {
            height: getResHeight(60),
          },
        ],
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
              }}>
              Home
            </Text>
          ),
          tabBarIcon: ({focused}) => (
            <VectorIcon
              type={'Octicons'}
              name={'home'}
              size={getFontSize(17)}
              color={focused ? theme.color.white : '#999999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyCards"
        component={MyCards}
        options={{
          tabBarLabel: 'My Cards',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
              }}>
              MyCards
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <VectorIcon
              type={'AntDesign'}
              name={'creditcard'}
              size={getFontSize(17)}
              color={focused ? theme.color.white : '#999999'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyInsights"
        component={MyInsights}
        options={{
          tabBarLabel: 'My Insights',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
              }}>
              MyInsights
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <VectorIcon
              type={'Octicons'}
              name={'graph'}
              size={getFontSize(17)}
              color={focused ? theme.color.white : '#999999'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={MyProfile}
        options={{
          tabBarLabel: 'Profile',
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                color: focused ? 'white' : 'black',
              }}>
              Profile
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <VectorIcon
              type={'FontAwesome'}
              name={'user-circle-o'}
              size={getFontSize(17)}
              color={focused ? theme.color.white : '#999999'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {HomePage} from '../Screens';
// import TabNav from './TabNavigation';

const RootStack = createNativeStackNavigator();
// const AuthStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

// function AuthNavigation(props) {
//   return (
//     <>
//       <AuthStack.Screen
//         name="HomePage"
//         initialRouteName={'HomePage'}
//         component={HomePage}
//         options={{
//           animationEnabled:true,
//           headerShown: false
//         }}
//       />

//     </>
//   );
// }
function HomeNavigation(props) {
  return (
    <>
      {/* <HomeStack.Navigator initialRouteName="HomePage"> */}

      <HomeStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />

      {/* <HomeStack.Screen
        name="MyProfile"
        component={MyProfile}
        options={{headerShown: false}}
      /> */}

      {/* </HomeStack.Navigator> */}
    </>
  );
}
export default function StackNavigation(props) {

  const {isLoggedIn} = props;
  return (
    <RootStack.Navigator
      initialRouteName={isLoggedIn ? 'HomePage' : 'HomePage'}
      // initialRouteName="tab"
    >

    {/* <RootStack.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      /> */}
      {/* {AuthNavigation()} */}
      {HomeNavigation()}
    </RootStack.Navigator>
  );
}

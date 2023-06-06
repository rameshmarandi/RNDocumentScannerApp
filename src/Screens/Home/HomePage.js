import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import theme from '../../utility/theme';

const HomePage = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f9f9f9',
        // backgroundColor:"#4a90e3",
        // backgroundColor:"#171c3b",
        // backgroundColor:"#e6e9f5",
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <View
        style={{
          // flex:2,
          height: 239,
          width: '100%',
          backgroundColor: theme.color.primary,
          borderBottomRightRadius: 100,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 19,
            color: '#f9f9f9',
            marginLeft: '5%',
            fontFamily: theme.font.semiBold,
          }}>
          All Documents
        </Text>
      </View>
      <Text
        style={{
          fontSize: 34,
          color: '#f9f9f9',

          // color:"#b0b4c5"
          // color:"#9C27B0"
        }}>
        Homepage
      </Text>
    </SafeAreaView>
  );
};

export default HomePage;

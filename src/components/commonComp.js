import React from 'react';
import {
  Alert,
  Linking,
  Platform,
  Share,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import * as rnfs from 'react-native-fs';
import {atob} from 'abab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../utility/theme';
import {StyleSheet} from 'react-native';
import {Button, Image} from 'react-native-elements';
import {getFontSize, getResHeight, hp, wp} from '../utility/responsive';
import {asyncKeys, BASEURL} from '../config/constants';
import {store} from '../utility/store';
import {Text, TextInput} from 'react-native-paper';
export const CommonButton = props => {
  const {
    onPress,
    title,
    isLoading,
    buttonStyle,
    backgroundColor,
    titleStyle,
    disabled,
  } = props;
  return (
    <>
      <Button
        title={title}
        onPress={onPress}
        //disabled={disabled}
        titleStyle={
          titleStyle
            ? titleStyle
            : {
                fontSize: getFontSize(16),
                fontFamily: theme.font.semiBold,
                fontWeight: 600,
              }
        }
        loading={isLoading}
        loadingProps={{size: 'small', color: 'white'}}
        containerStyle={{
          width: '100%',
          justifyContent: 'center',
        }}
        buttonStyle={
          buttonStyle
            ? buttonStyle
            : {
                width: '100%',
                justifyContent: 'center',
                height: getResHeight(40),
                borderRadius: 5,
                backgroundColor: backgroundColor
                  ? backgroundColor
                  : theme.color.seletedBtn,
              }
        }
      />
    </>
  );
};

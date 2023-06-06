import React, {Component, useState} from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {Button} from 'react-native-elements';

import theme from '../utility/theme';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  SCREENWIDTH,
  wp,
} from '../utility/responsive';
import {
  findButtonStyle,
  findContainerStyle,
  findLabelStyle,
} from '../config/styleconfig';
import TouchableSensitivity from '../TouchableSensitivity';

import {Path, Svg} from 'react-native-svg';
import {Menu} from 'react-native-paper';
import { VectorIcon } from './VectorIcon';
import assets from '../utility/theme/assets';
const BackBtn = props => {
  const backProps = props.backProps;
  if (backProps) {
    const {title, iconStyle, onPress, style} = backProps;
    const titleStyle = findLabelStyle(style);
    const containerStyle = findContainerStyle(style);
    const btnStyle = findButtonStyle(style);
    const color =
      iconStyle && iconStyle.color
        ? iconStyle.color
        : theme.color.secondPrimary;
    const clength = backProps.clength ? backProps.clength : 20;
    const btnTitle = props => {
      if (title && title.length > clength) {
        return title.substring(0, clength);
      }
      return title;
    };

    return (
      <Button
        type={'clear'}
        title={btnTitle()}
        onPress={() => {
          console.log('back press', onPress);
          if (typeof onPress == 'function') {
            onPress();
          } else {
            // props.navigation.pop();
          }
        }}
        iconPosition="left"
        TouchableComponent={props => (
          <TouchableSensitivity props={props} color={color} />
        )}
        icon={
          <VectorIcon
            type={'MaterialIcons'}
            name={'arrow-back-ios'}
            size={getFontSize(18)}
            color={'#053C6D'}
          />
        }
        iconContainerStyle={{}}
        containerStyle={[containerStyle]}
        buttonStyle={[
          btnStyle,
          {
            padding: 0,
            alignItems: 'center',
          },
        ]}
        titleStyle={[
          {
            color: color,
            fontSize:
              title && title.length > clength
                ? getFontSize(14)
                : getFontSize(16),
            fontFamily: theme.font.regular,
            fontWeight: '700',
          },
          titleStyle,
        ]}
        titleProps={{
          numberOfLines: 1,
        }}
      />
    );
  }
  return null;
};

const Logo = props => {
  const logoProps = props.logoProps;
  if (logoProps) {
    const {title, iconStyle, onPress, style} = logoProps;
    const titleStyle = findLabelStyle(style);
    const containerStyle = findContainerStyle(style);
    const btnStyle = findButtonStyle(style);
    const color =
      iconStyle && iconStyle.color ? iconStyle.color : theme.color.accent;
    const clength = 20;
    const btnTitle = props => {
      if (title && title.length > clength) {
        return title.substring(0, clength);
      }
      return title;
    };

    return (
      <Button
        type={'clear'}
        title={btnTitle()}
        onPress={() => {
          console.log('logo press', onPress);
          if (typeof onPress == 'function') {
            onPress();
          } else {
            // props.navigation.pop();
          }
        }}
        iconPosition="left"
        TouchableComponent={props => (
          <TouchableSensitivity props={props} color={color} />
        )}
        icon={
          <Image
            source={assets.SplashLogo}
            style={{width: getResWidth(30), height: getResWidth(30)}}
          />
        }
        iconContainerStyle={{}}
        containerStyle={[containerStyle]}
        buttonStyle={[
          btnStyle,
          {
            padding: 0,
            alignItems: 'center',
          },
        ]}
        titleStyle={[
          {
            color: color,
            fontSize:
              title && title.length > clength
                ? getFontSize(14)
                : getFontSize(16),
            fontFamily: theme.font.regular,
            fontWeight: '700',
          },
          titleStyle,
        ]}
        titleProps={{
          numberOfLines: 1,
        }}
      />
    );
  }
  return null;
};
const RightIcon = props => {
  const rightIconProps = props.rightIconProps;
  const {iconStyle, onPress, style} = rightIconProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={
        <VectorIcon
          type={'AntDesign'}
          name={'check'}
          size={getFontSize(18)}
          color={'#053C6D'}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const QuestionButton = props => {
  const quesProps = props.quesProps;
  const {iconStyle, onPress, style} = quesProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={
        <VectorIcon
          type={'AntDesign'}
          name={'questioncircleo'}
          size={getFontSize(18)}
          color={'grey'}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Hamburger = props => {
  const hamburgerProps = props.hamburgerProps;
  const {iconStyle, onPress, style} = hamburgerProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={assets.hamburger}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Search = props => {
  const searchProps = props.searchProps;
  const {iconStyle, iconStyle1, onPress, style} = searchProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const color1 =
    iconStyle1 && iconStyle1.color
      ? iconStyle1.color
      : theme.color.searchOutline;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={theme.svg.SearchIcon({color: color, color1: color1})}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          // padding: 0,
          paddingLeft: 1,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Notification = props => {
  const notificationProps = props.notificationProps;
  const {iconStyle, onPress, style} = notificationProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      // icon={assets.headerNotification}
      icon={theme.svg.NotificationIcon({color: color})}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          // padding: 0,
          paddingLeft: 1,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Timeline = props => {
  const timelineProps = props.timelineProps;
  const {iconStyle, onPress, style} = timelineProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={theme.svg.TimelineIcon({color: color})}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          // padding: 0,
          paddingLeft: 1,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Chat = props => {
  const chatProps = props.chatProps;
  const {iconStyle, onPress, style} = chatProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={theme.svg.ChatIcon({color: color})}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          // padding: 0,
          paddingLeft: 1,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Add = props => {
  const addProps = props.addProps;
  const {iconStyle, onPress, style} = addProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={
        <VectorIcon
          type={'Ionicons'}
          name={'ios-add'}
          size={getFontSize(18)}
          color={'#053C6D'}
        />
      }
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          padding: 0,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const Dot = props => {
  const [showMenu, setShowMenu] = useState(false);
  const dotProps = props.dotProps;
  const {iconStyle, onPress, style} = dotProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Menu
      visible={showMenu}
      onDismiss={() => setShowMenu(false)}
      contentStyle={[
        {
          backgroundColor: theme.color.accent,
          bottom: hp(3),
          top: hp(0.05),
        },
      ]}
      anchor={
        <Button
          type={'clear'}
          onPress={() => {
            setShowMenu(!showMenu);
          }}
          iconPosition="right"
          TouchableComponent={props => (
            <TouchableSensitivity props={props} color={color} />
          )}
          icon={
            <VectorIcon
              type={'Entypo'}
              name={'dots-three-vertical'}
              size={getFontSize(18)}
              color={'#053C6D'}
            />
          }
          iconContainerStyle={{}}
          containerStyle={[containerStyle]}
          buttonStyle={[
            btnStyle,
            {
              padding: 0,
              alignItems: 'center',
            },
          ]}
        />
      }>
      <Menu.Item
        onPress={() => {}}
        title="Report"
        titleStyle={{
          color: '#262626',
          fontFamily: theme.font.mulishRegular,
          fontSize: getFontSize(12),
          fontWeight: '500',
        }}
        leadingIcon={assets.Report}
      />
      <Menu.Item
        onPress={() => {}}
        title="Block"
        titleStyle={{
          color: theme.color.black,
          fontFamily: theme.font.regular,
          fontSize: getFontSize(13),
          fontWeight: '500',
        }}
        leadingIcon={assets.block}
      />
      <Menu.Item
        onPress={() => {}}
        title="Clear Chat"
        titleStyle={{
          color: theme.color.black,
          fontFamily: theme.font.regular,
          fontSize: getFontSize(13),
          fontWeight: '500',
        }}
        leadingIcon={assets.clearChat}
      />
    </Menu>
  );
};
const Share = props => {
  const shareProps = props.shareProps;
  const {iconStyle, onPress, style} = shareProps;
  const containerStyle = findContainerStyle(style);
  const btnStyle = findButtonStyle(style);
  const color =
    iconStyle && iconStyle.color ? iconStyle.color : theme.color.secondPrimary;
  const clength = 20;
  return (
    <Button
      type={'clear'}
      onPress={() => {
        if (typeof onPress == 'function') {
          onPress();
        } else {
          // props.navigation.pop();
        }
      }}
      iconPosition="right"
      TouchableComponent={props => (
        <TouchableSensitivity props={props} color={color} />
      )}
      icon={theme.svg.ShareIcon({color: color})}
      iconContainerStyle={{}}
      containerStyle={[containerStyle]}
      buttonStyle={[
        btnStyle,
        {
          // padding: 0,
          paddingLeft: 1,
          alignItems: 'center',
        },
      ]}
    />
  );
};
const headerTitleStyle = props => {
  const headerTitleStyleProps = props.headerTitleStyleProps;
  const color = headerTitleStyleProps?.color;
  const align = headerTitleStyleProps?.align;
  // const style = headerTitleStyleProps?.style;
  return {
    fontSize: getFontSize(14),
    fontWeight: '600',
    fontFamily: theme.font.regular,
    color: color ? color : '#263154',
    textAlign: align ? align : 'center',
  };
};

const headerBackground = props => {
  const headerTransparent = props.headerTransparent;
  const titleImg = props.titleImage;
  const title = props.title;
  const titlePosition = props.titlePosition;
  const scrolleffect = props.scrolleffect;
  const backStyle = props.headerBackstyle;
  if (typeof headerTransparent == 'boolean' && headerTransparent) {
    return (
      <View
        style={[
          {
            width: '100%',
            height: '100%',
            backgroundColor: theme.color.transparent,
          },
          backStyle,
        ]}></View>
    );
  }
  return (
    <View
      style={[
        {
          width: '100%',
          height: '100%',
          backgroundColor: theme.color.accent,
          borderBottomWidth: 2,
          borderBottomColor: theme.color.accent,
        },
        backStyle,
        scrolleffect && {
          backgroundColor: theme.color.accent,
          shadowColor: '#000',
          shadowOffset: {width: 1, height: 1},
          shadowOpacity: 0.3,
          shadowRadius: 3,
          elevation: 8,
        },
      ]}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {/* {titleImg && (
          <Image
            source={require('../../assets/img/headerlog00.png')}
            style={[
              {
                width: getResWidth(100),
                height: '100%',
                alignSelf: 'center',
                resizeMode: 'contain',
              },
            ]}
          />
        )} */}
        {/* {placeTextInput()} */}
      </SafeAreaView>
    </View>
  );
};

export default function NavigationBar(props) {
  const {navigation} = props;
  const style = props.style;
  const title = props.title;
  // const headerType = props.headerType;
  const headerTransparent = props.headerTransparent;
  const headerLeftContainerStyle = props.headerLeftContainerStyle;
  const headerRightContainerStyle = props.headerRightContainerStyle;

  return {
    // headerShown: props.headerShown ? props.headerShown : true,
    headerStyle: [
      props.headerStyle,
      Platform.OS === 'android' &&
        headerTransparent && {
          height: getResHeight(70),
        },
    ],
    title: props.title ? props.title : '',
    titleStyle: {},
    headerTransparent: headerTransparent ? headerTransparent : false,
    // headerTitleStyle: headerTitleStyle(),
    headerBackground: () => headerBackground(props),
    headerLeft: () => (
      <>
        <BackBtn {...props} />
        <Logo {...props} />
      </>
    ),
    headerTitleAlign: 'left',
    headerLeftContainerStyle: [
      {
        flexDirection: 'row',
        paddingLeft: wp(2.5),
        alignItems: 'center',
      },
      headerLeftContainerStyle,
    ],
    headerRight: () => {
      return (
        <View style={{flexDirection: 'row'}}>
          {props.rightIconProps && <RightIcon {...props} />}
          {props.quesProps && <QuestionButton {...props} />}
          {props.searchProps && <Search {...props} />}
          {props.notificationProps && <Notification {...props} />}
          {props.timelineProps && <Timeline {...props} />}
          {props.chatProps && <Chat {...props} />}
          {props.hamburgerProps && <Hamburger {...props} />}
          {props.addProps && <Add {...props} />}
          {props.dotProps && <Dot {...props} />}
          {props.shareProps && <Share {...props} />}
        </View>
      );
    },

    headerRightContainerStyle: [
      {
        paddingRight: wp(2.5),
      },
      headerRightContainerStyle,
    ],
  };
}

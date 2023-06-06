import React, {Component, useEffect} from 'react';
import {Animated,Image, StatusBar, Text,LogBox, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation, {
  AuthNavigation,
} from './src/Navigations/StackNavigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/utility/store';
import {PersistGate} from 'redux-persist/integration/react';
import theme from './src/utility/theme';
import {Provider as MenuProvider} from 'react-native-paper';
import {TouchableOpacity} from 'react-native';
LogBox.ignoreAllLogs(true);

function AnimatedSlash() {
  // const width = new Animated.Value(0);
  // const height = new Animated.Value(0);

  // useEffect(() => {
  //   Animated.timing(
  //     width, // The animated value to drive
  //     {
  //       toValue: 100, // Animate to opacity: 1 (opaque)
  //       duration: 1800, // Make it take a while
  //       useNativeDriver: false,
  //     },
  //   ).start(); // Starts the animation
  //   Animated.timing(
  //     height, // The animated value to drive
  //     {
  //       toValue: 100, // Animate to opacity: 1 (opaque)
  //       duration: 1800, // Make it take a while
  //       useNativeDriver: false,
  //     },
  //   ).start(); // Starts the animation
  // }, []);

  return (
    <Image
      source={{uri : "https://t4.ftcdn.net/jpg/03/17/25/45/360_F_317254576_lKDALRrvGoBr7gQSa1k4kJBx7O2D15dc.jpg"}}
      style={{
        width: 120,
        height:120,
      }}
      resizeMode='contain'
    />
  );
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }
  async componentDidMount() {
    setTimeout(() =>{

this.setState({isLoggedIn: true});
    },6000)
    // let session = await getUserSession();
    // store.dispatch(getTokenApi());
    // setTimeout(() => {
    //   if (session && session.EmployeeID) {
    //     this.setState({isLoggedIn: true});
    //   } else {
    //     this.setState({isLoggedIn: false});
    //   }
    // }, 1850);
  }
  render() {
    const {isLoggedIn} = this.state;
    if (isLoggedIn != null) {
      return (
        <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            translucent={true}
            backgroundColor={theme.color.transparent}
          />
          <PersistGate persistor={persistor}>
            <MenuProvider>
              <NavigationContainer>
                <StackNavigation isLoggedIn={this.state.isLoggedIn} />
              </NavigationContainer>
            </MenuProvider>
          </PersistGate>
        </Provider>
      );
    }
    return (
      <View
        style={{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#1F5DAD',
        }}>      
        <Text>sdfsdfsdf</Text>
        {/* <AnimatedSlash /> */}
      </View>
    );
  }
}

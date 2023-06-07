import React, {Component, useEffect} from 'react';
import {Animated, Image, StatusBar, Text, LogBox, View} from 'react-native';
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
import Loader from './src/components/Loader';
import Lottie from 'lottie-react-native';
LogBox.ignoreAllLogs(true);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: null,
    };
  }
  async componentDidMount() {
    setTimeout(() => {
      this.setState({isLoggedIn: true});
    }, 1500);
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
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f9f9f9',
        }}>
          <View  
           style ={{
            height: '100%',
            width:"100%",
            justifyContent:"center",
            alignItems:"center",
          }}>
        <Lottie
          source={require('./src/assets/splashLoader.json')}
          style ={{
            height: '55%',
            width:"30%",
            alignSelf:"center"
          }}
        
          autoPlay
          loop
        />
        </View>      
      </View>
    );
  }
}

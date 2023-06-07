import React from 'react';
import { StyleSheet ,View,Text} from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import {
  getFontSize,
  getResHeight,
  getResWidth,
  SCREENHEIGHT,
  SCREENWIDTH,
} from '../utility/responsive'
import theme from '../utility/theme';
export default class Loader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: this.props };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 5000);
  }

  render() {
    const { visible } = this.props;
  
    return (
      <View
       style={{
  flex:1,
  justifyContent:"center",
  alignItems:"center",
  // backgroundColor:"red"
      }}>
      <AnimatedLoader
        visible={visible}     
        // overlayColor="rgba(255,255,255,0.75)"
        source={require("../assets/splashLoader.json")}        
        animationStyle={styles.lottie}
        speed={1}
      >      
      </AnimatedLoader>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: "80%",
    height: "70%",
    alignSelf:"center"
  }
});
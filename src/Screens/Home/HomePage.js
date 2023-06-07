import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  getFontSize,
  getResHeight,
  getResWidth,
  hp,
  wp,
} from '../../utility/responsive';
import DocumentScanner from 'react-native-document-scanner-plugin';
import theme from '../../utility/theme';
import {useNavigation} from '@react-navigation/native';
import {VectorIcon} from '../../components/VectorIcon';
const HomePage = props => {
  const [scannedImage, setScannedImage] = useState(null);
  const navigation = useNavigation();
  const scanDocument = async () => {
    // start the document scanner
    const {scannedImages} = await DocumentScanner.scanDocument({
      letUserAdjustCrop: true,
      croppedImageQuality: 100,
      maxNumDocuments: 24,
    });

    // get back an array with scanned image file paths
    if (scannedImages.length > 0) {
      // set the img src, so we can view the first scanned image
      setScannedImage(scannedImages[0]);
    }
  };

  useEffect(() => {
    // call scanDocument on load
    // scanDocument()
  }, []);

  console.log('Image path', scannedImage);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#f9f9f9',
      }}>
      <View
        style={{
          height: 239,
          width: '100%',
          backgroundColor: theme.color.primary,
          borderBottomRightRadius: 100,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('CaptureImage');
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
        </TouchableOpacity>
      </View>
      <View>
        <VectorIcon
          type={'AntDesign'}
          name={'check'}
          size={getFontSize(18)}
          color={'#053C6D'}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomePage;

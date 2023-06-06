import React from 'react';
import {Alert, Linking, Platform, Share} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
// import * as ImagePicker from 'react-native-image-crop-picker';
import * as rnfs from 'react-native-fs';
import {atob} from 'abab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../utility/theme';
import {asyncKeys, BASEURL} from '../config/constants';
import { store } from '../utility/store';


export const isLoggdIn = async () => {
  try {
    const asyncVal = await AsyncStorage.getItem(asyncKeys.loginSession);
    return asyncVal === '1' ? true : false;
  } catch (err) {
    console.log('Chack is logdin', err);
  }
  return false;
};

export const setIsLoggdIn = async val => {
  try {
    if (val) {
      AsyncStorage.setItem(asyncKeys.loginSession, '1');
      return true;
    }
  } catch (err) {
    console.log('Chack is logdin', err);
  }
  AsyncStorage.setItem(asyncKeys.loginSession, '0');
  return false;
};

export const checkTenPassout = academicData => {
  try {
    let academicList = academicData;
    if (!academicData) {
      const state = store.getState();
      academicList = state.profile.academicData;
    }
    if (academicList && academicList.length > 0) {
      const tenTh = academicList.find(se => se.GroupID === 13);
      return typeof tenTh === 'object';
    }
  } catch (e) {
    console.log('checkTenPassout', e);
  }
  return false;
};
export const checkTwelfthPassout = academicData => {
  try {
    let academicList = academicData;
    if (!academicData) {
      const state = store.getState();
      academicList = state.profile.academicData;
    }
    if (academicList && academicList.length > 0) {
      const tenTh = academicList.find(se => se.GroupID === 14);
      return typeof tenTh === 'object';
    }
  } catch (e) {
    console.log('checkTenPassout', e);
  }
  return false;
};
export const checkGraduationPassout = academicData => {
  try {
    let academicList = academicData;
    if (!academicData) {
      const state = store.getState();
      academicList = state.profile.academicData;
    }
    if (academicList && academicList.length > 0) {
      const tenTh = academicList.find(se => se.GroupID === 1);
      return typeof tenTh === 'object';
    }
  } catch (e) {
    console.log('checkTenPassout', e);
  }
  return false;
};

export const getYears = (min, max) => {
  try {
    const year = new Date().getFullYear();
    let yearLen = 45;
    const yearOfArr = Array.from(
      new Array(yearLen),
      (val, index) => year - index,
    );
    return yearOfArr;
  } catch (e) {
    console.log('Error', e);
  }
  return [];
};

export const removeSpace = txt => {
  return txt.replace(/\s/g, '');
};

export function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, {type: mime});
}

export function blobToEncodfile(res) {
  try {
    let fileReaderInst = new FileReader();
    fileReaderInst.readAsDataURL(res);
    fileReaderInst.onload = () => {
      return fileReaderInst.result;
    };
  } catch {
    return null;
  }
}

export function DataURIToBlob(dataURI) {
  const splitDataURI = dataURI.split(',');
  const byteString =
    splitDataURI[0].indexOf('base64') >= 0
      ? atob(splitDataURI[1])
      : decodeURI(splitDataURI[1]);
  const mimeString = splitDataURI[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) ia[i] = byteString.charCodeAt(i);
  return new Blob([ia], {type: mimeString});
}

export const splitLatLong = str => {
  try {
    const location = str;
    if (
      location &&
      (location.includes('~') || (location && location.includes(',')))
    ) {
      let arry = [];
      if (location.includes('~')) {
        arry = location.split('~');
      } else if (location.includes(',')) {
        arry = location.split(',');
      }
      if (Array.isArray(arry) && arry.length == 2) {
        let latitude = arry[0];
        latitude = Number(latitude);
        let longitude = arry[1];
        longitude = Number(longitude);
        return {latitude, longitude};
      }
    }
  } catch (err) {
    console.log('LatLong error', err);
  }
  return null;
};

export const initialRegion = str => {
  try {
    if (splitLatLong(str)) {
      return {
        latitude: splitLatLong(str).latitude,
        longitude: splitLatLong(str).longitude,
        latitudeDelta: Number(20.0),
        longitudeDelta: Number(20.0),
      };
    }
  } catch (err) {
    console.log('err', err);
  }
  return {
    latitude: Number('19.0602653'),
    longitude: Number('72.8575344'),
    latitudeDelta: Number(20),
    longitudeDelta: Number(20),
  };
};

export const decodeStr = str => {
  try {
    const dstr = atob(str);
    if (dstr) {
      return dstr;
    }
  } catch (err) {
    console.log('Decode error', err);
  }
  return str;
};

export const uriDecod = str => {
  try {
    if (str.includes('base64;')) {
      let baseStr = atob(str.replace('base64;', ''));
      return decodeURIComponent(baseStr);
    }
    return decodeURIComponent(str);
  } catch {
    return '';
  }
};

export const splitJobID = str => {
  let splitId = str;
  if (splitId && splitId != '') {
    if (splitId.includes(BASEURL)) {
      splitId = splitId.replace(BASEURL, '');
      splitId = splitId.replace('\\', '/');
      splitId = splitId.split('/');
      if (splitId && splitId.length > 0) {
        splitId = splitId[splitId.length - 1];
      }
      return splitId;
    }
  }
  return str;
};

export const splitName = str => {
  try {
    let obj = {
      firstName: '',
      lastName: '',
      middleName: '',
    };
    if (typeof str === 'string') {
      let nameArr = str.split(' ');
      if (nameArr.length >= 1) {
        obj.firstName = nameArr[0];
      }
      if (nameArr.length >= 2) {
        obj.lastName = nameArr[1];
      }
      if (nameArr.length >= 3) {
        obj.middleName = nameArr[2];
      }
      return obj;
    }
  } catch (e) {
    console.log('Name split error', e);
  }
  return '';
};


export const openLinking = link => {
  try {
    if (Platform.OS === 'ios') {
      Linking.canOpenURL(`${link}`)
        .then(supported => {
          if (supported) {
            Linking.openURL(`${link}`);
          } else {
            Alert.alert('Url not Available');
          }
        })
        .catch(error => {
          console.log('Error', error);
        });
    } else {
      Linking.openURL(`${link}`);
    }
  } catch (e) {
    console.log('Error');
  }
};

export const onShare = async (message, url, title) => {
  try {
    const result = await Share.share({
      message: message,
      url: url,
      title: title,
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        console.log('activityType');
        // shared with activity type of result.activityType
      } else {
        console.log('shared');
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      console.log('dismissedAction');
    }
  } catch (error) {
    alert(error.message);
  }
};

export async function MGLoginData() {
  try {
    let MGDetails = await AsyncStorage.getItem('@MG_LOGIN');
    MGDetails = JSON.parse(atob(MGDetails));
    return MGDetails;
  } catch (e) {
    console.log('MG Details Fetch Error', e);
  }
  return null;
}

export const isYoutubeLink = url => {
  try {
    var p =
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    if (url.match(p)) {
      return url.match(p)[1];
    }
  } catch (e) {
    console.log('error', e);
  }
  return null;
};

export const checkMediaType = url => {
  if (url.match(theme.regex.youtube)) {
    return 'youtube';
  } else if (theme.regex.instagram.test(url)) {
    return 'instagram';
  } else if (theme.regex.facebook.test(url)) {
    return 'facebook';
  } else if (theme.regex.twitter.test(url)) {
    return 'twitter';
  }
  return '';
};

export function PickImage(props) {
  return ImagePicker.openCamera({
    width: 400,
    height: 400,
    cropping: true,
    includeBase64: true,
  });
}

// export function ChooseImage(props) {
//   const {includeBase64 = true, cropping = true} = props;
//   return ImagePicker.openPicker({
//     width: 400,
//     height: 400,
//     cropping: cropping,
//     includeBase64: includeBase64,
//     mediaType: 'photo',
//   });
// }

export function ChooseFile(prop) {
  return DocumentPicker.pick({
    allowMultiSelection: true,
    type: [
      DocumentPicker.types.pdf,
      DocumentPicker.types.doc,
      DocumentPicker.types.docx,
    ],
  });
}

export async function removeFileOnCache(path) {
  console.log('path', path);
  return new Promise(function (then, reject) {
    rnfs
      .exists(path)
      .then(res => {
        if (res) {
          rnfs.unlink(path).then(then).catch(reject);
        }
      })
      .catch(reject);
  });
}

export async function writeFileOnCache(file, filename) {
  return new Promise(function (then, reject) {
    let splitStr = file;
    let fileName = 'IMG_PROFILE_01';
    if (splitStr.includes('base64,')) {
      splitStr = splitStr.split('base64,');
      if (splitStr.length > 0) {
        if (splitStr.length == 2) {
          splitStr = splitStr[1];
        } else {
          splitStr = splitStr[0];
        }
      }
    }
    fileName = fileName + '.jpeg';
    if (filename) {
      fileName = filename;
    }
    let path = `${rnfs.TemporaryDirectoryPath}${fileName}`;
    path = 'file://' + path;
    rnfs
      .writeFile(path, splitStr, 'base64')
      .then(() => {
        then(path);
      })
      .catch(reject);
  });
}

export async function aTob(data) {
  return await rnfs.readFile(data, 'base64');
}

export function arrayObjtoObj(data) {
  try {
    let obj = data;
    if (typeof obj === 'object' || Array.isArray(obj)) {
      if (Array.isArray(obj) && obj.length != 0) {
        obj = Object.assign(
          {},
          ...obj.map(item => {
            return item;
          }),
        );
      }
      return obj;
    }
  } catch {}
  return {};
}

import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-async-storage/async-storage` depending on where you get it from
  .configure({
    name: 'fliick',
    // host:'192.168.15.173'
  }) // controls connection & communication settings
  .use(reactotronRedux())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

console.tron = Reactotron;

reactotron.onCustomCommand({
  title: 'Decrypt',
  description: 'Decrypt user data',
  command: 'resetStore',
  handler: async () => {},
});

export default reactotron;

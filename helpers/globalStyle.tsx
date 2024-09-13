import {StyleSheet} from 'react-native';
import global from './global';

const globalStyle = StyleSheet.create({
  primary: {
    backgroundColor: global.color.background,
  },
  flexOne: {
    flex: 1,
  },
});

export default globalStyle;

import { StyleSheet} from 'react-native';
import { verticalScale } from '../../../helpers/scaling';
import global from '../../../helpers/global';

const styles = StyleSheet.create({
    button: {
      height:verticalScale(30),
      borderRadius: 5,
      justifyContent:"center",
      alignItems: 'center',
    },
    buttonText: {
      color: global.color.white,
      fontFamily: global.getFontFamily("600"),
      fontSize:global.fontSize.f14
    },
  });


export default styles
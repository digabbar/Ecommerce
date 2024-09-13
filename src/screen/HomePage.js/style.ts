import { StyleSheet} from 'react-native';
import { horizontalScale, verticalScale } from '../../../helpers/scaling';

const styles = StyleSheet.create({ 
    list: {
      paddingHorizontal: horizontalScale(8),
      paddingVertical:verticalScale(8)
    },
});
  


export default styles
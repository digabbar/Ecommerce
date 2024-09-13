import { StyleSheet, ViewStyle,Platform } from 'react-native';
import { horizontalScale, verticalScale } from '../../../helpers/scaling';
import global from '../../../helpers/global';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    paddingTop:Platform.OS==="ios"?verticalScale(30):verticalScale(10),
    backgroundColor: global.color.header,
    height:Platform.OS==="ios"?verticalScale(100):verticalScale(50),
  } as ViewStyle,



  titleContainer: {
    flex: 1,
    alignItems: 'center',
  } as ViewStyle,

  rightContainer: {
    alignItems: 'flex-end',
  } as ViewStyle,
  title: {
    width:"100%",
    fontSize: global.fontSize.f18,
    color:global.color.white,
    fontFamily: global.getFontFamily('600'),
    marginLeft:horizontalScale(10),
  }as ViewStyle,
  leftButton:{
    
  }as ViewStyle,
  rightButton:{
    
  }
});

export default styles;

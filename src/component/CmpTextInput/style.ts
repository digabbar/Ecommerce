import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../../helpers/scaling";
import global from "../../../helpers/global";

const styles = StyleSheet.create({
    container:{
        marginBottom:verticalScale(12),
    },
    label: {
      fontSize: scaleFontSize(16),
      fontFamily:global.getFontFamily('600'),
      marginBottom: 5,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: global.color.border,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: verticalScale(5),
      backgroundColor: global.color.background,
    },
    inputContainerFocused: {
      borderColor: global.color.success,

    },
    inputContainerError: {
      borderColor: global.color.error, // Color for error state
    },
    input: {
      flex: 1,
      fontSize: global.fontSize.f16,
      fontFamily:global.getFontFamily("500"),
      paddingVertical: verticalScale(5),
    },
    errorText: {
      color: global.color.error, // Color for error message
      fontSize: global.fontSize.f12,
      fontFamily:global.getFontFamily("400"),
      marginTop: 5,
    },
  });

  export default styles
  
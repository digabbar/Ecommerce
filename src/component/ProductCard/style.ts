import { StyleSheet } from "react-native";
import global from "../../../helpers/global";
import { horizontalScale, verticalScale } from "../../../helpers/scaling";

const styles = StyleSheet.create({
    card: {
      backgroundColor: global.color.black10,
      borderRadius: 10,
      padding: horizontalScale(16),
      margin: horizontalScale(8),
      
    },
    productName: {
      fontSize: global.fontSize.f18,
      fontFamily: global.getFontFamily("700"),
      color:global.color.text,
      marginBottom: 4,
    },
    productPrice: {
      fontSize: global.fontSize.f16,
      color: global.color.text,
      marginBottom: verticalScale(12),
    },
  });

  export default styles
import React from 'react';
import {Text, StyleSheet, TextProps} from 'react-native';
import global from '../../../helpers/global';

interface CmpTextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  size?: number;
  weight?: '400' | '500' | '600' | '700';
}

const CmpText: React.FC<CmpTextProps> = ({
  children,
  color = global.color.text,
  size = global.fontSize.f14,
  weight = '400',
  style,
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.text,
        {color, fontSize: size, fontFamily: global.getFontFamily(weight)},
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: global.color.text, // Fallback color
    fontSize: global.fontSize.f14, // Fallback font size
    fontFamily: global.getFontFamily('400'), // Fallback font weight
  },
});

export default CmpText;

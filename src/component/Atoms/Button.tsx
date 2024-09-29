import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {verticalScale} from '../../../helpers/scaling';
import global from '../../../helpers/global';
import CmpText from './CmpText';

interface ButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  [key: string]: any;
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  title,
  color = global.color.primary,
  ...rest
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
      {...rest}>
      <CmpText style={styles.buttonText}>{title}</CmpText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: verticalScale(30),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: global.color.white,
    fontFamily: global.getFontFamily('600'),
    fontSize: global.fontSize.f14,
  },
});

export default Button;

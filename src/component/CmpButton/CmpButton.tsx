import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './style';
import global from '../../../helpers/global';

interface CmpButtonProps {
  onPress: () => void;
  title: string;
  color?: string;
  [key: string]: any;
}

const CmpButton: React.FC<CmpButtonProps> = ({
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
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CmpButton;

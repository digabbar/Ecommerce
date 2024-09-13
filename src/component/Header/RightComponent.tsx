import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import SVGIcon from '../SvgIcon';
import {ADD} from '../../../assets/images/svg/index';
import {verticalScale} from '../../../helpers/scaling';

interface RightComponentProps {
  onPress?: () => void;
}

const RightComponent: React.FC<RightComponentProps> = ({onPress}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.rightButton} onPress={handlePress}>
      <SVGIcon xml={ADD} width={verticalScale(30)} height={verticalScale(30)} />
    </TouchableOpacity>
  );
};

export default RightComponent;

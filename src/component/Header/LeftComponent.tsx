import React, {useCallback} from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './style';
import SVGIcon from '../SvgIcon';
import {BACK} from '../../../assets/images/svg/index';
import {verticalScale} from '../../../helpers/scaling';

interface LeftComponentProps {
  onPress?: () => void;
}

const LeftComponent: React.FC<LeftComponentProps> = ({onPress}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress();
    }
  }, [onPress]);

  return (
    <TouchableOpacity style={styles.leftButton} onPress={handlePress}>
      <SVGIcon
        xml={BACK}
        width={verticalScale(30)}
        height={verticalScale(30)}
      />
    </TouchableOpacity>
  );
};

export default LeftComponent;

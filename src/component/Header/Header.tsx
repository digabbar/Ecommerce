import React, {useMemo} from 'react';
import {View} from 'react-native';
import styles from './style';

interface HeaderProps {
  leftComponent?: React.ReactNode;
  titleComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  leftComponent,
  titleComponent,
  rightComponent,
}) => {
  const leftComponentMemo = useMemo(() => leftComponent, [leftComponent]);
  const titleComponentMemo = useMemo(() => titleComponent, [titleComponent]);
  const rightComponentMemo = useMemo(() => rightComponent, [rightComponent]);

  return (
    <View style={styles.header}>
      {leftComponentMemo && <View>{leftComponentMemo}</View>}
      {titleComponentMemo && (
        <View style={styles.titleContainer}>{titleComponentMemo}</View>
      )}
      {rightComponentMemo && (
        <View style={styles.rightContainer}>{rightComponentMemo}</View>
      )}
    </View>
  );
};

export default Header;

import React from 'react';
import {View, TouchableOpacity, StyleSheet, Platform} from 'react-native';
import SVGIcon from './SvgIcon';
import {BACK, ADD} from '../../../assets/images/svg/index';
import {verticalScale, horizontalScale} from '../../../helpers/scaling';

import global from '../../../helpers/global';
import CmpText from '../Atoms/CmpText';

interface HeaderProps {
  leftComponent?: React.ReactNode;
  titleComponent?: React.ReactNode;
  rightComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  leftComponent,
  titleComponent,
  rightComponent,
}) => (
  <View style={styles.header}>
    <View>{leftComponent}</View>
    <View style={styles.titleContainer}>{titleComponent}</View>
    <View style={styles.rightContainer}>{rightComponent}</View>
  </View>
);

interface LeftComponentProps {
  onPress?: () => void;
}

const LeftComponent: React.FC<LeftComponentProps> = ({onPress}) => (
  <TouchableOpacity style={styles.leftButton} onPress={onPress}>
    <SVGIcon xml={BACK} width={verticalScale(30)} height={verticalScale(30)} />
  </TouchableOpacity>
);

interface RightComponentProps {
  onPress?: () => void;
}

const RightComponent: React.FC<RightComponentProps> = ({onPress}) => (
  <TouchableOpacity style={styles.rightButton} onPress={onPress}>
    <SVGIcon xml={ADD} width={verticalScale(30)} height={verticalScale(30)} />
  </TouchableOpacity>
);

interface TitleComponentProps {
  title: string;
}

const TitleComponent: React.FC<TitleComponentProps> = ({title}) => (
  <CmpText style={styles.title}>{title}</CmpText>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(16),
    paddingTop: Platform.OS === 'ios' ? verticalScale(30) : verticalScale(10),
    backgroundColor: global.color.header,
    height: Platform.OS === 'ios' ? verticalScale(100) : verticalScale(50),
  },
  titleContainer: {
    flex: 1,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  title: {
    fontSize: global.fontSize.f18,
    color: global.color.white,
    fontFamily: global.getFontFamily('600'),
    marginLeft: horizontalScale(10),
  },
  leftButton: {},
  rightButton: {},
});

export {Header, LeftComponent, RightComponent, TitleComponent};

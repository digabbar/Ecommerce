import React from 'react';
import {SvgXml} from 'react-native-svg';
import global from '../../../helpers/global';

interface SVGIconProps {
  width?: number | string;
  height?: number | string;
  xml: string;
  opacity?: number;
  styles?: object;
  fill?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
  width,
  height,
  xml,
  opacity,
  styles,
}) => {
  return (
    <SvgXml
      width={width}
      height={height}
      xml={xml}
      opacity={opacity}
      fill={global.color.white}
      style={[{flex: 1}, styles]}
    />
  );
};

export default SVGIcon;

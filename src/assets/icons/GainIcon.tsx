import { IIcon } from '@app-types/icon';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function GainIcon({ size = 9 }: IIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <Path
        d="M8.727.252H2.894V1.49h3.77L.861 7.293l.825.825 5.803-5.803v3.77h1.238V.252z"
        fill="#0FDF8F"
      />
    </Svg>
  );
}

export default GainIcon;

import { IIcon } from '@app-types/icon';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LossIcon({ size = 9 }: IIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 9 9" fill="none">
      <Path
        d="M8.727 8.706V2.873H7.489v3.77L1.686.84l-.825.825 5.804 5.803h-3.77v1.238h5.832z"
        fill="#EE8688"
      />
    </Svg>
  );
}

export default LossIcon;

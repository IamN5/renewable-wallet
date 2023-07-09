import { IFocusableIcon } from '@app-types/icon';
import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowLeftIcon({
  focused,
  color,
  accentColor = palette.subtitleGrey,
}: IFocusableIcon) {
  return (
    <Svg width={18} height={16} viewBox="0 0 18 16" fill="none">
      <Path
        d="M7.293 15.707a.996.996 0 001.414 0 1 1 0 000-1.414L3.414 9H17a1 1 0 000-2H3.414l5.293-5.293A1 1 0 107.293.293l-7 7a1 1 0 000 1.414l7 7z"
        fill={focused ? accentColor : color}
      />
    </Svg>
  );
}

export default ArrowLeftIcon;

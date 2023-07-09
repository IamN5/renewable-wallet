import { IFocusableIcon } from '@app-types/icon';
import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function HomeTabIcon({
  color,
  focused,
  size = 19,
  accentColor = palette.primary,
}: IFocusableIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 19 19" fill="none">
      <Path
        d="M18.5 17.733a1 1 0 01-1 1h-16a1 1 0 01-1-1V7.223a1 1 0 01.386-.79l8-6.222a1 1 0 011.228 0l8 6.222a1 1 0 01.386.79v10.51zm-10-7v6h2v-6h-2z"
        fill={focused ? accentColor : color}
      />
    </Svg>
  );
}

export default HomeTabIcon;

import { IFocusableIcon } from '@app-types/icon';
import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function EyeIcon({
  color,
  focused,
  size = 20,
  accentColor = palette.primary,
}: IFocusableIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10 3.333C3.333 3.333.833 10 .833 10s2.5 6.667 9.167 6.667S19.167 10 19.167 10 16.667 3.333 10 3.333zM10 5c4.397 0 6.62 3.556 7.34 4.997C16.62 11.427 14.38 15 10 15c-4.397 0-6.62-3.556-7.34-4.997C3.38 8.573 5.62 5 10 5zm0 1.667a3.333 3.333 0 100 6.667 3.333 3.333 0 000-6.667zm0 1.666a1.666 1.666 0 110 3.333 1.666 1.666 0 010-3.333z"
        fill={focused ? accentColor : color}
      />
    </Svg>
  );
}

export default EyeIcon;

import { IFocusableIcon } from '@app-types/icon';
import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function BellIcon({
  focused,
  color,
  accentColor = palette.primary,
  size = 20,
}: IFocusableIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 21" fill="none">
      <Path
        d="M18 15h2v2H0v-2h2V8a8 8 0 1116 0v7zm-2 0V8A6 6 0 104 8v7h12zm-9 4h6v2H7v-2z"
        fill={focused ? accentColor : color}
      />
    </Svg>
  );
}

export default BellIcon;

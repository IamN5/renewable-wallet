import { IFocusableIcon } from '@app-types/icon';
import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function TradeTabIcon({
  focused,
  color,
  size = 24,
  accentColor = palette.primary,
}: IFocusableIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 24" fill="none">
      <Path
        d="M16.55 12l4.95 4.95-4.95 4.95-1.414-1.414 2.536-2.537L4.5 17.95v-2h13.172l-2.536-2.536L16.55 12zM8.45 2l1.414 1.414L7.328 5.95H20.5v2H7.328l2.536 2.536L8.45 11.9 3.5 6.95 8.45 2z"
        fill={focused ? accentColor : color}
      />
    </Svg>
  );
}

export default TradeTabIcon;

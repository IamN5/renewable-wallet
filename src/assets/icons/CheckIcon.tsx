import palette from '@utils/theme';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CheckIcon() {
  return (
    <Svg width={17} height={13} viewBox="0 0 17 13" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.622 4.968a2.096 2.096 0 013.006 0l2.747 2.801L13.372.635a2.096 2.096 0 013.006 0c.83.846.83 2.218 0 3.064l-8.5 8.666a2.096 2.096 0 01-3.006 0L.622 8.032a2.197 2.197 0 010-3.064z"
        fill={palette.primary}
      />
    </Svg>
  );
}

export default CheckIcon;

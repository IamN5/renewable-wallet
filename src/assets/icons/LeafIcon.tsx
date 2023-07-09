import { IIcon } from '@app-types/icon';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function LeafIcon({ size = 13 }: IIcon) {
  return (
    <Svg width={size} height={size} viewBox="0 0 13 13" fill="none">
      <Path
        d="M2.75.906l-.25.235s-2 1.822-2 4.14c0 2.643 2.36 3.797 2.36 3.797l.546.266.156-.594s.13-.54.626-1.11C4.684 7.07 5.503 6.5 7 6.5c2.229 0 3.783 1.197 4.266 1.594C10.88 8.633 9.447 10.5 7 10.5c-1.115 0-1.861-.242-2.313-.438A5.344 5.344 0 016.61 9.11c1.286-.345 2.282-.125 2.282-.125l.218-.968s-.312-.077-.812-.094a6.72 6.72 0 00-1.953.219c-1.52.408-3.348 1.537-4.532 4.156l.907.406a7.515 7.515 0 011.203-1.906c.476.242 1.555.703 3.078.703 3.445 0 5.422-3.234 5.422-3.234l.219-.344-.297-.281S10.074 5.5 7 5.5c-.55 0-1.02.082-1.453.203a4.094 4.094 0 00-.031-1.594c-.46-2.144-2.454-3.062-2.454-3.062L2.75.907zm.188 1.266c.392.228 1.312.824 1.593 2.14.14.659.09 1.174 0 1.516-.09.342-.187.469-.187.469-.334.22-.688.437-.907.687-.052.06-.095.127-.14.188a7.872 7.872 0 01-.047-.875c.008-.729.078-1.313.078-1.313l-.984-.14s-.084.64-.094 1.437c-.004.346.01.73.047 1.11-.408-.414-.797-1.063-.797-2.11 0-1.455 1.074-2.71 1.438-3.11z"
        fill="#0FDF8F"
      />
    </Svg>
  );
}

export default LeafIcon;

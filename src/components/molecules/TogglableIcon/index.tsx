import { IFocusableIcon, IIcon } from '@app-types/icon';
import palette from '@utils/theme';
import React, { ComponentType, memo } from 'react';
import { TouchableOpacity } from 'react-native';

type ITogglableIcon = Partial<IIcon> & {
  Icon: ComponentType<IFocusableIcon>;
  state: boolean;
  onToggle: () => void;
};
function TogglableIcon({
  Icon,
  state,
  onToggle,
  accentColor = palette.primary,
  color = palette.subtitleGrey,
  size,
}: ITogglableIcon) {
  const onPress = () => {
    onToggle?.();
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        focused={state}
        color={color}
        accentColor={accentColor}
        size={size}
      />
    </TouchableOpacity>
  );
}

export default memo(TogglableIcon);

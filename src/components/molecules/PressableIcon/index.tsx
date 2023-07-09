import { IFocusableIcon, IIcon } from '@app-types/icon';
import palette from '@utils/theme';
import React, { ComponentType } from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';

type IPressableIcon = PressableProps &
  Partial<IIcon> & {
    Icon: ComponentType<IFocusableIcon>;
    subtitle?: string;
    subtitleStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
  };

function PressableIcon({
  Icon,
  color = palette.primary,
  accentColor = palette.pressedPrimary,
  size = 48,
  subtitle,
  subtitleStyle,
  containerStyle,
  ...props
}: IPressableIcon) {
  return (
    <View style={[styles.container, containerStyle]}>
      <Pressable {...props}>
        {({ pressed }) => (
          <Icon
            focused={pressed}
            color={color}
            accentColor={accentColor}
            size={size}
          />
        )}
      </Pressable>
      {!!subtitle && (
        <Text style={[styles.subtitle, subtitleStyle]}>{subtitle}</Text>
      )}
    </View>
  );
}

export default PressableIcon;

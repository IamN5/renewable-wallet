import palette from '@utils/theme';
import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import styles from './styles';

interface IButton {
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
  style?: ViewStyle;
  color?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

function Button({
  label,
  onPress,
  isDisabled,
  style,
  color,
  labelStyle,
  buttonStyle,
}: IButton) {
  return (
    <TouchableOpacity
      style={[{ width: '90%' }, style]}
      onPress={onPress}
      disabled={isDisabled}>
      <View
        style={[
          styles.container,
          { backgroundColor: color ?? palette.primary },
          buttonStyle,
        ]}>
        <View style={[styles.labelWrapper]}>
          <Text style={[styles.label, labelStyle]}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

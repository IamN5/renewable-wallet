import palette from '@utils/theme';
import React from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import styles from './styles';

interface IButton {
  label: string;
  onPress: () => void;
  isDisabled?: boolean;
  style?: ViewStyle;
  color?: string;
}

function Button({ label, onPress, isDisabled, style, color }: IButton) {
  return (
    <TouchableOpacity
      style={[{ width: '90%' }, style]}
      onPress={onPress}
      disabled={isDisabled}>
      <View
        style={[
          styles.container,
          { backgroundColor: color ?? palette.primary },
        ]}>
        <View style={[styles.labelWrapper]}>
          <Text style={[styles.label]}>{label}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Button;

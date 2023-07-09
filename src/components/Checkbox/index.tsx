import CheckIcon from '@assets/icons/CheckIcon';
import palette from '@utils/theme';
import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import styles from './styles';

interface ICheckbox {
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
  setChecked: (checked: boolean | React.ChangeEvent<Element>) => void;
  isChecked: boolean;
  style?: StyleProp<ViewStyle>;
  textComponent?: React.ReactNode;
}

function Checkbox({
  label,
  labelStyle,
  setChecked,
  isChecked,
  style,
  textComponent,
}: ICheckbox) {
  return (
    <BouncyCheckbox
      isChecked={isChecked}
      onPress={setChecked}
      ImageComponent={CheckIcon}
      text={label}
      size={20}
      style={style}
      textStyle={[styles.text, labelStyle]}
      textComponent={textComponent}
      iconStyle={styles.icon}
      innerIconStyle={styles.innerIcon}
      fillColor={palette.primary}
      unfillColor={palette.disabledGrey}
    />
  );
}

export default Checkbox;

import React, { memo, ReactNode, useState } from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import { Control, useController } from 'react-hook-form';
import palette from '@utils/theme';
import styles from './styles';

export type IInput = TextInputProps & {
  icon?: ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  onEdit?: () => void;
  isError?: boolean;
  style?: StyleProp<ViewStyle>;
  label?: string;
};

interface IRHFInput extends IInput {
  name: string;
  control: Control<any>;
}

function Input({
  placeholder,
  value,
  isError,
  onChangeText,
  onEdit,
  style,
  label,
  icon,
  ...props
}: IInput) {
  const [active, setActive] = useState(false);

  const onFocus = () => {
    setActive(true);
  };

  const onBlur = () => {
    setActive(false);
  };

  return (
    <View style={style}>
      <View style={styles.inputView}>
        {!!label && <Text style={styles.inputLabel}>{label}</Text>}
        <View style={[styles.inputBox, active && styles.activeInput]}>
          <TextInput
            style={[styles.input, isError && styles.errorInput]}
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            onFocus={onFocus}
            onBlur={onBlur}
            onSubmitEditing={onEdit}
            placeholderTextColor={palette.subtitleGrey}
            {...props}
          />
          {!!icon && icon}
        </View>
      </View>
    </View>
  );
}

export function RHFInput({ control, name, ...props }: IRHFInput) {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue: '',
  });

  return (
    <>
      <Input {...props} value={field.value} onChangeText={field.onChange} />
      {fieldState.error && (
        <Text style={styles.errorText}>{fieldState.error.message}</Text>
      )}
    </>
  );
}

export default memo(Input);

import React, { memo, ReactNode, useState } from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import palette from '@utils/theme';
import { Control, FieldValues, useController } from 'react-hook-form';
import styles from './styles';

export type IInput = TextInputProps & {
  icon?: ReactNode;
  placeholder: string;
  value?: string;
  onChangeText?: (value: string) => void;
  onEdit?: () => void;
  isError?: boolean;
  style?: StyleProp<ViewStyle>;
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
      <View style={styles.inputBox}>
        <TextInput
          style={[styles.input, isError && styles.errorInput]}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onFocus}
          onBlur={onBlur}
          onSubmitEditing={onEdit}
          placeholderTextColor={palette.grey}
          {...props}
        />
      </View>
      <View
        style={[
          styles.line,
          { backgroundColor: active ? palette.primary : 'black' },
        ]}
      />
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
        <Text style={[styles.errorText, styles.inputError]}>
          {fieldState.error.message}
        </Text>
      )}
    </>
  );
}

export default memo(Input);

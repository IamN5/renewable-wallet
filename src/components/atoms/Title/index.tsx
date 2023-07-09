import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import styles from './styles';

interface ITitle {
  style?: StyleProp<TextStyle>;
  children: string | React.ReactNode;
}

function Title({ children, style }: ITitle) {
  return <Text style={[styles.title, style]}>{children}</Text>;
}

export default Title;

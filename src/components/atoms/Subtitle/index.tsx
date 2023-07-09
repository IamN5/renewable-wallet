import React from 'react';
import { StyleProp, Text, TextStyle } from 'react-native';
import styles from './styles';

interface ISubtitle {
  style?: StyleProp<TextStyle>;
  children: string | React.ReactNode;
}

function Subtitle({ children, style }: ISubtitle) {
  return <Text style={[styles.subtitle, style]}>{children}</Text>;
}

export default Subtitle;

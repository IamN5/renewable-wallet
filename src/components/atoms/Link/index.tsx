import React from 'react';
import { Text } from 'react-native';
import styles from './style';

interface ILink {
  children: string;
  onPress?: () => void;
}

function Link({ children, onPress }: ILink) {
  return (
    <Text
      suppressHighlighting={!!onPress}
      onPress={onPress}
      style={styles.link}>
      {children}
    </Text>
  );
}

export default Link;

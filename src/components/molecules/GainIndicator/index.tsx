import GainIcon from '@assets/icons/GainIcon';
import LossIcon from '@assets/icons/LossIcon';
import palette from '@utils/theme';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IGainIndicator {
  gain: string;
  positiveGain?: boolean;
  absoluteGain?: string;
}

function GainIndicator({
  gain,
  positiveGain = false,
  absoluteGain,
}: IGainIndicator) {
  const gainColor = positiveGain ? palette.statusGreen : palette.statusRed;

  return (
    <View style={styles.container}>
      {positiveGain ? <GainIcon color="" /> : <LossIcon color="" />}
      <Text
        style={[
          styles.gainText,
          {
            color: gainColor,
          },
        ]}>
        {gain}
      </Text>
      {!!absoluteGain && (
        <Text style={[styles.gainText, { color: gainColor }]}>
          ({absoluteGain})
        </Text>
      )}
    </View>
  );
}

export default GainIndicator;

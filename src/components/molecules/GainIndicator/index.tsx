import GainIcon from '@assets/icons/GainIcon';
import LossIcon from '@assets/icons/LossIcon';
import palette from '@utils/theme';
import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

interface IGainIndicator {
  gain: string;
  positiveGain?: boolean;
}

function GainIndicator({ gain, positiveGain = false }: IGainIndicator) {
  return (
    <View style={styles.container}>
      {positiveGain ? <GainIcon color="" /> : <LossIcon color="" />}
      <Text
        style={[
          styles.gainText,
          {
            marginLeft: 2,
            color: positiveGain ? palette.statusGreen : palette.statusRed,
          },
        ]}>
        {gain}
      </Text>
    </View>
  );
}

export default GainIndicator;

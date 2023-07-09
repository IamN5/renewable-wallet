import React, { ComponentType } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { IIcon } from '@app-types/icon';
import palette from '@utils/theme';
import GainIndicator from '@molecules/GainIndicator';
import styles from './styles';

interface IFundCard {
  Icon: ComponentType<IIcon>;
  label: string;
  value: string;
  gain: string;
  positiveGain?: boolean;
  graphData: { value: number; label: string; labelComponent: () => void }[];
}

function FundCard({
  Icon,
  label,
  value,
  gain,
  positiveGain = false,
  graphData,
}: IFundCard) {
  const fundCardColor = positiveGain ? palette.statusGreen : palette.statusRed;

  const onPress = () => {
    console.log('FundCard pressed');
  };

  return (
    <View style={styles.fundCard}>
      <TouchableOpacity delayPressIn={100} onPress={onPress}>
        <Icon color="" />

        <Text style={styles.fundLabel}>{label}</Text>

        <View style={styles.fundGraphWrapper}>
          <LineChart
            key={label + value + gain + positiveGain}
            width={110}
            height={60}
            adjustToWidth
            curved
            disableScroll
            hideDataPoints
            hideAxesAndRules
            hideRules
            hideYAxisText
            data={graphData}
            textFontSize={13}
            thickness={2}
            color={fundCardColor}
          />
        </View>

        <View style={styles.fundStats}>
          <Text style={[styles.fundStatsLabel, { marginRight: 4 }]}>
            {value}
          </Text>

          <GainIndicator gain={gain} positiveGain={positiveGain} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default FundCard;

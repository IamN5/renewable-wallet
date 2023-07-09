import React, { ComponentType } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import { IIcon } from '@app-types/icon';
import palette from '@utils/theme';
import GainIndicator from '@molecules/GainIndicator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParams } from '@app-types/routes';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  HomeStackParams,
  'Home'
>['navigation'];

interface IFundCard {
  Icon: ComponentType<IIcon>;
  label: string;
  code: string;
  value: string;
  gain: string;
  positiveGain?: boolean;
  graphData: { value: number; label: string; labelComponent: () => void }[];
}

function FundCard({
  Icon,
  label,
  code,
  value,
  gain,
  positiveGain = false,
  graphData,
}: IFundCard) {
  const navigation = useNavigation<NavigationProps>();
  const fundCardColor = positiveGain ? palette.statusGreen : palette.statusRed;

  const onPress = () => {
    navigation.navigate('Asset', {
      label,
      code,
    });
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

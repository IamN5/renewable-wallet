import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Title from '@atoms/Title';
import FundCard from '@organisms/FundCard';
import WindIcon from '@assets/icons/WindIcon';
import {
  plantFundData,
  solarFundData,
  windFundDetailedData,
} from '@utils/graphs';
import SunIcon from '@assets/icons/SunIcon';
import ContentHeader from '@organisms/ContentHeader';
import LeafIcon from '@assets/icons/LeafIcon';
import Subtitle from '@components/atoms/Subtitle';
import CarbonCreditsLogo from '@assets/icons/CarbonCreditsLogo';
import styles from './styles';

function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <ContentHeader
        balance="$1,200.00"
        portfolio="$8,333.67"
        gain="23.6%"
        positiveGain
      />

      <View style={styles.contentWrapper}>
        <Title>Funds</Title>

        <ScrollView
          style={styles.fundsContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <FundCard
            Icon={WindIcon}
            label="Wind Fund"
            code="WFND"
            value="$1032.23"
            gain="32.4%"
            positiveGain
            graphData={windFundDetailedData}
          />
          <FundCard
            Icon={SunIcon}
            label="Solar Fund"
            code="SFND"
            value="$973.69"
            gain="6.79%"
            graphData={solarFundData}
          />
          <FundCard
            Icon={LeafIcon}
            label="Plant Fund"
            code="PFND"
            value="$5169.47"
            gain="150%"
            positiveGain
            graphData={plantFundData}
          />
        </ScrollView>

        <View style={styles.carbonCredits}>
          <View style={styles.carbonText}>
            <Text
              numberOfLines={2}
              lineBreakMode="middle"
              style={styles.carbonTitle}>
              Learn more about carbon credits
            </Text>
            <Subtitle style={{ color: 'white' }}>
              Check out our top tips!
            </Subtitle>
          </View>

          <CarbonCreditsLogo />
        </View>
      </View>
    </View>
  );
}

export default Home;

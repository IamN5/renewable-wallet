import React from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Header from '@components/organisms/Header';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HomeStackParams } from '@app-types/routes';
import GainIndicator from '@components/molecules/GainIndicator';
import { LineChart } from 'react-native-gifted-charts';
import { windFundDetailedData } from '@utils/graphs';
import palette from '@utils/theme';
import Subtitle from '@components/atoms/Subtitle';
import PortfolioTabIcon from '@assets/icons/PortfolioTabIcon';
import Button from '@components/atoms/Button';
import FundStatsSection from '@components/organisms/FundStatsSection';
import BreakdownCard from '@components/organisms/BreakdownCard';
import styles from './styles';

function Asset() {
  const { params } = useRoute<RouteProp<HomeStackParams, 'Asset'>>();
  const { top } = useSafeAreaInsets();

  const emptyOnPress = () => {};

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Header title={params.label} subtitle={params.code} showBack />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.contentWrapper}>
          <View style={styles.contentRow}>
            <Text style={styles.sectionText}>$18.23</Text>
            <Text style={styles.sectionText}>2022</Text>
          </View>
          <GainIndicator gain="32.78%" absoluteGain="$1.5" positiveGain />
        </View>

        <View style={styles.fundGraphWrapper}>
          <LineChart
            key={params.code + params.label}
            width={Dimensions.get('window').width}
            height={175}
            adjustToWidth
            disableScroll
            hideAxesAndRules
            data={windFundDetailedData}
            textFontSize={13}
            thickness={2}
            color={palette.statusGreen}
            dataPointsColor="transparent"
            textShiftX={-8}
            textShiftY={-10}
          />
        </View>

        <View style={styles.contentWrapper}>
          <Text style={[styles.infoText, styles.spacing]}>Info & Stats</Text>

          <FundStatsSection
            AUM="$1.5B"
            vintageRange="2019-2022"
            TER="0.15%"
            issueDate="10/08/2018"
            priceAtClose="$17.92"
            priceAtOpen="$17.23"
          />

          <Text style={[styles.infoText, styles.spacing]}>Fund Breakdown</Text>

          <ScrollView
            style={styles.breakdownContainer}
            horizontal
            showsHorizontalScrollIndicator={false}>
            <BreakdownCard
              banner={require('@assets/images/aspiradacbanner.png')}
              logo={require('@assets/images/aspiradac.png')}
              description="Aspira is building a modular, direct air capture system with the energy supply integrated into the modules."
            />

            <BreakdownCard
              banner={require('@assets/images/climeworksbanner.png')}
              logo={require('@assets/images/climeworks.png')}
              description="Uses renewable geothermal energy and waste heat to capture CO₂ directly from the air."
            />
          </ScrollView>

          <View style={[styles.infoRow, styles.spacing]}>
            <PortfolioTabIcon color="black" focused={false} />
            <Text style={[styles.infoText, { marginLeft: 5 }]}>
              Your Portfolio
            </Text>
          </View>

          <View style={styles.contentRow}>
            <Text style={styles.sectionText}>18 credits</Text>
            <Text style={styles.sectionText}>$328.14</Text>
          </View>
          <View style={[styles.contentRow, styles.spacing]}>
            <GainIndicator gain="9.13%" positiveGain />
            <Subtitle style={styles.stat}>Last purchased 28d ago</Subtitle>
          </View>

          <View style={styles.actions}>
            <Button
              label="Sell"
              onPress={emptyOnPress}
              color="white"
              style={{ width: '50%', marginRight: 10 }}
              buttonStyle={styles.sellButton}
              labelStyle={{ color: palette.primary }}
            />
            <Button
              label="Retire Credits"
              onPress={emptyOnPress}
              color={palette.green}
              style={{ width: '50%' }}
              buttonStyle={styles.retireButton}
            />
          </View>

          <Subtitle style={styles.spacing}>
            You&apos;ve previously retired 28 credits of this asset
          </Subtitle>

          <View style={styles.warningBox}>
            <Subtitle>
              Please note that prices are for reference only and may vary at the
              time of excecuting a buy or sell order.
            </Subtitle>

            <Subtitle>
              The information provided is not investment advice, and should not
              be used as a recommendation to buy or sell assets.
            </Subtitle>
          </View>

          <Button onPress={emptyOnPress} label="Buy" style={styles.buyButton} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Asset;

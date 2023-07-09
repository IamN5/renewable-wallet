import Subtitle from '@components/atoms/Subtitle';
import React from 'react';
import { View } from 'react-native';
import styles from './styles';

interface IFundStatsSection {
  AUM: string;
  vintageRange: string;
  priceAtClose: string;
  issueDate: string;
  TER: string;
  priceAtOpen: string;
}

function FundStatsSection({
  AUM,
  vintageRange,
  priceAtClose,
  issueDate,
  TER,
  priceAtOpen,
}: IFundStatsSection) {
  return (
    <View style={styles.textGridContainer}>
      <View style={styles.textGridLeft}>
        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>AUM</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>{AUM}</Subtitle>
        </View>

        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>Vintage Range</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>
            {vintageRange}
          </Subtitle>
        </View>

        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>Price at Close</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>
            {priceAtClose}
          </Subtitle>
        </View>
      </View>

      <View style={styles.textGridRight}>
        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>Issue Date</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>
            {issueDate}
          </Subtitle>
        </View>

        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>TER</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>{TER}</Subtitle>
        </View>

        <View style={styles.statContainer}>
          <Subtitle style={styles.stat}>Price at Open</Subtitle>
          <Subtitle style={[styles.stat, styles.statText]}>
            {priceAtOpen}
          </Subtitle>
        </View>
      </View>
    </View>
  );
}

export default FundStatsSection;

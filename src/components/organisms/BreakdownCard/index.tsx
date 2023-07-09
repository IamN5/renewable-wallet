import React, { ComponentType } from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';

interface IFundCard {
  banner: ImageSourcePropType;
  logo: ImageSourcePropType;
  description: string;
}

function BreakdownCard({ banner, logo, description }: IFundCard) {
  return (
    <View style={styles.card}>
      <TouchableOpacity style={styles.content} delayPressIn={100}>
        <Image style={styles.cardHeaderImage} source={banner} />

        <View style={styles.body}>
          <Image style={styles.logo} source={logo} />

          <Text style={styles.text}>{description}</Text>

          <Text style={[styles.text, styles.readMore]}>Read more</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default BreakdownCard;

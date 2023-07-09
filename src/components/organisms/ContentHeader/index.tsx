import React from 'react';
import { Text, View } from 'react-native';
import PressableIcon from '@molecules/PressableIcon';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ProfileIcon from '@assets/icons/ProfileIcon';
import { useAppDispatch } from '@hooks/store';
import { userLogout } from '@store/slices/user';
import BellIcon from '@assets/icons/BellIcon';
import Subtitle from '@atoms/Subtitle';
import GainIndicator from '@molecules/GainIndicator';
import CoinIcon from '@assets/icons/CoinIcon';
import palette from '@utils/theme';
import styles from './styles';

interface IContentHeader {
  balance: string;
  portfolio: string;
  gain: string;
  positiveGain?: boolean;
}

function ContentHeader({
  balance,
  portfolio,
  gain,
  positiveGain = false,
}: IContentHeader) {
  const { top } = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(userLogout());
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <View style={styles.contentWrapper}>
        <View style={styles.accountInfo}>
          <PressableIcon
            style={styles.icon}
            size={24}
            color="black"
            Icon={ProfileIcon}
            onPress={onLogout}
          />
          <Text style={styles.infoText}>Account: {balance}</Text>
          <BellIcon focused={false} color="black" />
        </View>

        <View>
          <Subtitle style={{ color: 'black' }}>Portfolio</Subtitle>
        </View>

        <View style={styles.portfolioInfo}>
          <View style={styles.portfolioInfo}>
            <Text style={styles.portfolioText}>{portfolio}</Text>

            <GainIndicator gain={gain} positiveGain={positiveGain} />
          </View>

          <View style={styles.rewards}>
            <CoinIcon color={palette.primary} />
            <Text style={styles.rewardsText}>Earn Rewards</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default ContentHeader;

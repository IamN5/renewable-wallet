import React from 'react';
import { Text, View } from 'react-native';
import PressableIcon from '@molecules/PressableIcon';
import ArrowLeftIcon from '@assets/icons/ArrowLeftIcon';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

interface IHeader {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
}

function Header({ title, subtitle, showBack }: IHeader) {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const goBack = () => {
    if (!navigation.canGoBack()) return;

    navigation.goBack();
  };

  return (
    <View style={[styles.container, { paddingTop: top, height: top + 52 }]}>
      {showBack && (
        <PressableIcon
          style={styles.backIcon}
          containerStyle={styles.backIconContainer}
          Icon={ArrowLeftIcon}
          color="black"
          onPress={goBack}
        />
      )}
      {!!title && (
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {!!subtitle && <Text style={styles.subtitleText}>{subtitle}</Text>}
        </View>
      )}
    </View>
  );
}

export default Header;

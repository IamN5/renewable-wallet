import React from 'react';
import { View } from 'react-native';
import Link from '@components/atoms/Link';
import { useAppDispatch } from '@hooks/store';
import { userLogout } from '@store/slices/user';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './styles';

function Home() {
  const { top } = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(userLogout());
  };

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <Link onPress={onLogout}>Logout</Link>
    </View>
  );
}

export default Home;

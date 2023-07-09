import React, { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RHFInput } from '@components/Input';
import Button from '@components/Button';
import Subtitle from '@components/atoms/Subtitle';
import Link from '@components/atoms/Link';
import EyeIcon from '@assets/icons/EyeIcon';
import palette from '@utils/theme';
import TogglableIcon from '@components/TogglableIcon';
import { IUserLoginForm, UserLoginSchema } from '@app-types/user';
import { useAppDispatch } from '@hooks/store';
import { tryUserLogin } from '@store/slices/user';
import { AppStackParams } from '@app-types/routes';
import { useNavigation } from '@react-navigation/native';
import Header from '@components/Header';
import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  AppStackParams,
  'Login'
>['navigation'];

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm<IUserLoginForm>({
    resolver: zodResolver(UserLoginSchema),
  });

  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();

  const onSignIn: SubmitHandler<IUserLoginForm> = values => {
    dispatch(tryUserLogin(values));
  };

  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Header />

      <Text style={styles.titleText}>Login</Text>

      <RHFInput
        control={control}
        name="email"
        placeholder="Valid email"
        label="E-mail"
      />

      <RHFInput
        control={control}
        name="password"
        placeholder="Minimum 8 characters"
        label="Password"
        textContentType="password"
        secureTextEntry={!showPassword}
        icon={
          <TogglableIcon
            Icon={EyeIcon}
            color={palette.subtitleGrey}
            accentColor={palette.primary}
            state={showPassword}
            onToggle={togglePassword}
          />
        }
        style={styles.passwordInput}
      />

      <Button
        style={styles.submitButton}
        label="Login"
        onPress={handleSubmit(onSignIn)}
      />

      <Subtitle>
        Don&apos;t have an account? <Link onPress={onSignUp}>Sign up here</Link>
      </Subtitle>
    </SafeAreaView>
  );
}

export default Login;

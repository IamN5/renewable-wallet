import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RHFInput } from '@components/Input';
import Button from '@components/Button';
import Subtitle from '@components/atoms/Subtitle';
import Link from '@components/atoms/Link';
import EyeIcon from '@assets/icons/EyeIcon';
import palette from '@utils/theme';
import TogglableIcon from '@components/TogglableIcon';
import { IUserSignUpForm, UserSignUpSchema } from '@app-types/user';
import { useAppDispatch, useAppSelector } from '@hooks/store';
import {
  setSignUpStatus,
  tryUserLogin,
  tryUserSignUp,
} from '@store/slices/user';
import { AppStackParams } from '@app-types/routes';
import { useNavigation } from '@react-navigation/native';
import Header from '@components/Header';
import Title from '@components/atoms/Title';
import Checkbox from '@components/Checkbox';
import styles from './styles';

type NavigationProps = NativeStackScreenProps<
  AppStackParams,
  'SignUp'
>['navigation'];

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: {
      errors: { termsAndPrivacy },
    },
  } = useForm<IUserSignUpForm>({
    resolver: zodResolver(UserSignUpSchema),
    defaultValues: {
      termsAndPrivacy: false,
    },
  });

  const navigation = useNavigation<NavigationProps>();
  const dispatch = useAppDispatch();
  const { registerStatus } = useAppSelector(state => state.user);

  const onSignIn: SubmitHandler<IUserSignUpForm> = values => {
    dispatch(tryUserSignUp(values));
  };

  const onLogin = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  useEffect(() => {
    if (registerStatus === 'success') {
      dispatch(setSignUpStatus('idle'));
      onLogin();
    }
  }, [onLogin, dispatch, registerStatus]);

  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <Header showBack />

      <Title>Create your account</Title>

      <RHFInput
        control={control}
        name="firstName"
        placeholder="Minimum 2 characters"
        label="First Name"
        textContentType="name"
      />

      <RHFInput
        control={control}
        name="lastName"
        placeholder="Minimum 2 characters"
        label="Last Name"
        textContentType="familyName"
        style={styles.spacing}
      />

      <RHFInput
        control={control}
        name="email"
        placeholder="Valid email"
        label="E-mail"
        textContentType="emailAddress"
        style={styles.spacing}
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
        style={styles.spacing}
      />

      <Controller
        name="termsAndPrivacy"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Checkbox
            style={[styles.terms, styles.spacing]}
            textComponent={
              <Subtitle style={styles.termsLabel}>
                I am over 18 years of age and I have read and agree to the{' '}
                <Link>Terms of Service</Link> and <Link>Privacy policy</Link>.
              </Subtitle>
            }
            isChecked={value}
            setChecked={onChange}
          />
        )}
      />
      {termsAndPrivacy && (
        <Text style={styles.errorText}>{termsAndPrivacy.message}</Text>
      )}

      <Button
        style={styles.submitButton}
        label="Create Account"
        onPress={handleSubmit(onSignIn)}
      />

      <Subtitle>
        Already have an account? <Link onPress={onLogin}>Log in here</Link>
      </Subtitle>
    </SafeAreaView>
  );
}

export default SignUp;

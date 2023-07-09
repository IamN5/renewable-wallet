import { NavigatorScreenParams } from '@react-navigation/native';

export type NavigatorParams = {
  HomeStack: NavigatorScreenParams<HomeStackParams>;
  Trade: undefined;
  Portfolio: undefined;
};

export type AppStackParams = {
  AppBottomNavigator: NavigatorScreenParams<NavigatorParams>;
  Login: undefined;
  SignUp: undefined;
};

export type HomeStackParams = {
  Home: undefined;
  Asset: { label: string; code: string };
};

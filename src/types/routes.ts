import { NavigatorScreenParams } from '@react-navigation/native';

export type NavigatorParams = {
  Home: undefined;
  Trade: undefined;
  Portfolio: undefined;
};

export type AppStackParams = {
  AppBottomNavigator: NavigatorScreenParams<NavigatorParams>;
  Login: undefined;
  SignUp: undefined;
};

import React, { useEffect, useMemo } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '@hooks/store';
import { logIn } from '@store/slices/user';
import storage from '@services/storage';
import { ACCESS_TOKEN_KEY } from '@app-types/user';
import BottomTabs from '@organisms/BottomTabs';
import HomeTabIcon from '@assets/icons/HomeTabIcon';
import TradeTabIcon from '@assets/icons/TradeTabIcon';
import PortfolioTabIcon from '@assets/icons/PortfolioTabIcon';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Trade from '@pages/Trade';
import Portfolio from '@pages/Portfolio';
import SignUp from '@pages/SignUp';
import { AppStackParams, HomeStackParams } from '@app-types/routes';
import Asset from '@pages/Asset';

const AppStack = createNativeStackNavigator<AppStackParams>();
const HomeStack = createNativeStackNavigator<HomeStackParams>();
const AppTab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Asset" component={Asset} />
    </HomeStack.Navigator>
  );
}

function AppBottomNavigator() {
  return (
    <AppTab.Navigator
      initialRouteName="HomeStack"
      tabBar={BottomTabs}
      screenOptions={{
        headerShown: false,
      }}
      id="AppBottomNavigator">
      <AppTab.Screen
        name="HomeStack"
        options={{ tabBarLabel: 'Home', tabBarIcon: HomeTabIcon }}
        component={HomeStackScreen}
      />
      <AppTab.Screen
        name="Trade"
        options={{ tabBarLabel: 'Trade', tabBarIcon: TradeTabIcon }}
        component={Trade}
      />
      <AppTab.Screen
        name="Portfolio"
        options={{ tabBarLabel: 'Portfolio', tabBarIcon: PortfolioTabIcon }}
        component={Portfolio}
      />
    </AppTab.Navigator>
  );
}

function RootNavigation() {
  const { isLoggedIn } = useAppSelector(state => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkForToken = async () => {
      const token = await storage.get(ACCESS_TOKEN_KEY);

      if (token) {
        // In a real app, we would set the token on our API layer here

        dispatch(logIn({ email: 'john@doe.com', password: 'dummypass' }));
      }
    };

    checkForToken();
  }, [dispatch]);

  const newRoutes = useMemo(
    () =>
      isLoggedIn ? (
        <AppStack.Screen
          name="AppBottomNavigator"
          component={AppBottomNavigator}
        />
      ) : (
        <>
          <AppStack.Screen name="Login" component={Login} />
          <AppStack.Screen name="SignUp" component={SignUp} />
        </>
      ),
    [isLoggedIn],
  );

  return (
    <AppStack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {newRoutes}
    </AppStack.Navigator>
  );
}

export default RootNavigation;

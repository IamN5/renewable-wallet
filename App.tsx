import React from 'react';
import { Appearance, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from '@store/index';
import RootNavigation from '@routes/index';

function App(): JSX.Element {
  Appearance.setColorScheme('light');
  StatusBar.setBarStyle('dark-content');

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Provider store={store}>
          <RootNavigation />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

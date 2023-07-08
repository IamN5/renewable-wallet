import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from '@store/index';
import RootNavigation from '@routes/index';

function App(): JSX.Element {
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

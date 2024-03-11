/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import RootNavigator from './src/navigation/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import appStore from './src/redux/appStore';
import {Provider} from 'react-redux';

function App(): React.JSX.Element {
  return (
    <Provider store={appStore}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

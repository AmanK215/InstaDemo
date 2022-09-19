/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from './src/Home';
import Posts from './src/Posts';
import store from './src/store';
import Comments from './src/Comments';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
            component={ProfileScreen}
            options={{ title: 'Profile Page' }}
          />
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Comments" component={Comments} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};


export default App;

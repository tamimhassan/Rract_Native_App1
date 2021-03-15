import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import MyDrawer from './Navigator/MyDrawer';

import { BookProvider } from './context/BookContext';

function App() {
  return (
    <NavigationContainer>
      <BookProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <MyDrawer />
      </BookProvider>
    </NavigationContainer>
  );
}

export default App;

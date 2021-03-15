import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import MyStack from './Navigator/MyStack';
import MyDrawer from './Navigator/MyDrawer';
// import MyTabs from './Navigator/MyTabs';

import { BookProvider } from './context/BookContext';

function App() {
  return (
    <NavigationContainer>
      <BookProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
        <MyDrawer />
        {/* <MyStack /> */}
        {/* <MyTabs /> */}
      </BookProvider>
    </NavigationContainer>
  );
}

export default App;

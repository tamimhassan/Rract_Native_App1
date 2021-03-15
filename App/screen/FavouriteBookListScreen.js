import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';

const FavouriteBookListScreen = () => {
  return (
    <View>
      <Header title="Favourite books" />
      <View>
        <Text>Favourite Books</Text>
      </View>
    </View>
  );
};

export default FavouriteBookListScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

import React, { useState, useContext } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';

import Header from '../components/Header';
import Book from '../components/Book';

import { BookContext } from '../context/BookContext';

const Feed = () => {
  // const [books, setBooks] = useState();
  const [BOOKS] = useContext(BookContext);
  // console.log(BOOKS);

  return (
    <View style={styles.home}>
      <Header title="Home Library" iconname="menu" />
      <View style={styles.container}>
        <FlatList
          data={BOOKS}
          keyExtractor={(item) => item.bookname}
          renderItem={({ item }) => <Book item={item} />}
          ListEmptyComponent={<Text>There is no books in the Library!</Text>}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  container: {
    padding: 15,
    paddingBottom: 50,
  },
});

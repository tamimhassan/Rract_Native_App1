import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableNativeFeedback,
} from 'react-native';
import { SearchBoldIcon } from '../assects/icons';
import Header from '../components/Header';

const SearchScreen = () => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <View style={{ flex: 1 }}>
      <Header title="Search" iconname="back" />
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: '#FFF',
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
            borderRadius: 10,
          }}>
          <TextInput
            style={{ flex: 1, color: '#2699FB' }}
            value={searchValue}
            onChangeText={(value) => setSearchValue(value)}
            placeholder="Search as book, author, genres.."
            placeholderTextColor="#2699FB"
          />
          <TouchableNativeFeedback>
            <SearchBoldIcon color={'#2699FB'} size={20} />
          </TouchableNativeFeedback>
        </View>
        <ScrollView>
          <Text>No book found!</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

const data = [
  {
    bookname: 'Coding interview',
    author: 'Gayle laakmann mcdowell',
    genres: 'English',
  },
  {
    bookname: 'Coding interview',
    author: 'Gayle laakmann mcdowell',
    genres: 'English',
  },
  {
    bookname: 'Coding interview',
    author: 'Gayle laakmann mcdowell',
    genres: 'English',
  },
  {
    bookname: 'Coding interview',
    author: 'Gayle laakmann mcdowell',
    genres: 'English',
  },
  {
    bookname: 'Coding interview',
    author: 'Gayle laakmann mcdowell',
    genres: 'English',
  },
];

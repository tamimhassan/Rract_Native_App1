import React, { useState, useCallback, useContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Picker,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { BookContext } from '../context/BookContext';
import Header from '../components/Header';

const AddBookScreen = ({ navigation }) => {
  const [bookname, setBookname] = useState('');
  const [author, setAuthor] = useState('');
  const [BookLanguage, setBookLanguage] = useState('Bangla');
  const [books, setBooks] = useContext(BookContext);

  const cancelHandler = () => {
    setAuthor('');
    setBookname('');
    setBookLanguage('Bangla');
  };

  const addHandler = useCallback(() => {
    if (bookname === '') {
      Alert.alert('Please enter Book name');
    } else if (!author) {
      Alert.alert('Please enter Author name');
    } else {
      const newBook = {
        bookname: bookname.trim(),
        author: author.trim(),
        language: BookLanguage,
      };
      setAuthor('');
      setBookname('');
      setBookLanguage('Bangla');
      setBooks([newBook, ...books]);
      navigation.navigate('Feed');
      console.log(newBook);
    }
  }, [BookLanguage, author, bookname]);

  return (
    <View style={styles.screen}>
      <Header title="Add new book" iconname="back" />
      <View style={styles.container}>
        <View>
          <TextInput
            style={styles.input}
            value={bookname}
            onChangeText={(value) => setBookname(value)}
            placeholder="Enter book name"
            placeholderTextColor="#2699FB"
          />
          <TextInput
            style={styles.input}
            value={author}
            onChangeText={(value) => setAuthor(value)}
            placeholder="Enter Author name"
            placeholderTextColor="#2699FB"
          />
          <View style={styles.selectLan}>
            <Text style={{ color: '#2699FB' }}>Book language: </Text>
            <Picker
              mode="dropdown"
              selectedValue={BookLanguage}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setBookLanguage(itemValue)
              }>
              <Picker.Item label="Bangla" value="bangla" />
              <Picker.Item label="English" value="english" />
            </Picker>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelBtn]}
              onPress={cancelHandler}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={addHandler}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AddBookScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  container: {
    padding: 30,
  },

  input: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    marginBottom: 15,
    borderColor: '#2699FB',
    borderWidth: 1,
    borderRadius: 4,
    color: '#2699FB',
  },

  selectLan: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 15,
    borderColor: '#2699FB',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    justifyContent: 'space-between',
  },

  picker: {
    height: 50,
    width: 150,
    backgroundColor: 'green',
    color: '#2699FB',
  },

  buttonContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  button: {
    backgroundColor: '#2699FB',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
  cancelBtn: {
    backgroundColor: 'red',
  },
});

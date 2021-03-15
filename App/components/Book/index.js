import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Img from '../../assects/images/book.jpg';

const index = ({ item }) => {
  return (
    <View style={styles.card}>
      <View>
        <Image source={Img} style={styles.book} />
      </View>
      <View style={styles.cardDetails}>
        <Text style={styles.bookname}>{item.bookname}</Text>
        <Text>{item.author}</Text>
        <Text>{item.language}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: '#EEE',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 75,
    padding: 5,
  },
  cardDetails: {
    marginLeft: 10,
  },
  bookname: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  book: {
    // resizeMode: 'cover',
    height: 50,
    width: 50,
  },
});

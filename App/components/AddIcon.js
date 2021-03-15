import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const AddIcon = () => {
  const navigation = useNavigation();
  return (
    <View style={{position: 'absolute', alignItems: 'center'}}>
      <TouchableHighlight
        style={styles.button}
        onPress={() => navigation.navigate('AddBook')}>
        <Text style={{color: 'white', fontSize: 35}}>+</Text>
      </TouchableHighlight>
    </View>
  );
};

export default AddIcon;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7F58FF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 72,
    height: 72,
    borderRadius: 50,
    position: 'absolute',
    top: -60,
    shadowRadius: 5,
    shadowOffset: {height: 10},
    shadowOpacity: 0.3,
    borderWidth: 3,
    borderColor: '#FFF',
  },
});

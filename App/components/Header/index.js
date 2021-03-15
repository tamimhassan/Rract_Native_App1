import React from 'react';
import {StyleSheet, Text, View, TouchableNativeFeedback} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MenuIcon, BackIcon} from '../../assects/icons';

const index = ({title, iconname}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {iconname !== 'menu' ? (
        <TouchableNativeFeedback
          style={{backgroundColor: 'green'}}
          onPress={() => navigation.navigate('Feed')}>
          <BackIcon color={'#2699FB'} size={24} />
        </TouchableNativeFeedback>
      ) : (
        <TouchableNativeFeedback
          style={{backgroundColor: 'green'}}
          onPress={() => navigation.openDrawer()}>
          <MenuIcon color={'#2699FB'} size={24} />
        </TouchableNativeFeedback>
      )}
      <View style={{marginLeft: 30}}>
        <Text style={{fontSize: 20, color: '#2699FB'}}>{title}</Text>
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    // backgroundColor: '#7F58FF',
    backgroundColor: '#FFF',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      height: 0,
      width: 1,
    },
    shadowOpacity: 1,
    elevation: 3,
  },
});

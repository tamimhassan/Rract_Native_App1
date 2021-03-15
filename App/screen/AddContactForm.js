import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddContactForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('01');
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'orange',
          borderRadius: 4,
          width: 150,
          height: 40,
          margin: 20,
          padding: 10,
        }}
        placeholder="Name"
        maxLength={20}
        onChangeText={(text) => {
          setName(text);
        }}
        value={name}
        autoFocus
      />
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: 'orange',
          borderRadius: 4,
          width: 150,
          height: 40,
          margin: 20,
          padding: 10,
        }}
        placeholder="01837247923"
        keyboardType="numeric"
        autoFocus
        value={number}
        onChangeText={(number) => setNumber(number)}
      />
      <Button
        title="Submit"
        onPress={() => {
          if (name.length >= 1 && number.length === 11) {
            console.log(`name: ${name}, phone number: ${number}`);
            return navigation.navigate('Home', {
              id: Math.random() * 100,
              name: name,
              number: number,
            });
          } else {
            alert(
              'name must contain 1 or more text and total number should be 11',
            );
          }
        }}
      />
    </View>
  );
};

export default AddContactForm;

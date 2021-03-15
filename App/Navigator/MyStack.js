import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyContactScreen from '../screen/MyContactScreen';
import AddContactForm from '../screen/AddContactForm';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MyContactScreen}
        options={{
          title: 'My Contact',
          headerTitleAlign: 'center',
        }}
      />
      <Stack.Screen
        name="Add Contact"
        component={AddContactForm}
        options={{ headerTitleAlign: 'center' }}
      />
    </Stack.Navigator>
  );
};

export default MyStack;

import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Header from '../components/Header';

import { createStackNavigator } from '@react-navigation/stack';
import { ProfileIcon } from '../assects/icons';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <View>
      <View>
        <ProfileIcon size={200} color="black" />
      </View>
      <View>
        <ProfileIcon size={20} color="black" />
        <View>
          <Text>Name</Text>
          <TextInput value="Tamim Hassan" />
        </View>
        {/* <PenIcon height={20} width={20} /> */}
      </View>
    </View>
  );
};

const ChangeProfileDetails = () => {
  return (
    <View>
      {/* <Header title="Profile" /> */}
      <View>
        <Text>Hello, world!</Text>
      </View>
    </View>
  );
};

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Profile} name="Profile" />
      <Stack.Screen
        component={ChangeProfileDetails}
        name="ChangeProfileDetails"
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

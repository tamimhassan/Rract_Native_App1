import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileIcon } from '../assects/icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Stack = createStackNavigator();

const Profile = () => {
  return (
    <View>
      <View>
        <ProfileIcon size={200} color="black" />
      </View>
      <View>
        <FontAwesomeIcon icon={['far', 'user']} />
        <View>
          <Text>Name</Text>
          <TextInput value="Tamim Hassan" />
        </View>
        <FontAwesomeIcon icon={['fas', 'pen']} />
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

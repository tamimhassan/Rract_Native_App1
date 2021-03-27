import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  Modal,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { ProfileIcon } from '../assects/icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Stack = createStackNavigator();

const Profile = () => {
  const [name, setName] = useState('Tamim Hassan');
  const [showModal, setShowModal] = useState(false);
  const [username, setUserName] = useState(name);

  const handleSave = () => {
    setName(username);
    setShowModal(!showModal);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePic}>
        <ProfileIcon size={180} color="black" />
      </View>
      <TouchableNativeFeedback onPress={() => setShowModal(true)}>
        <View style={styles.nameContainer}>
          <View style={styles.Div}>
            <FontAwesomeIcon icon={['far', 'user']} style={styles.icon} />
            <View style={styles.paddingFromIcon}>
              <Text style={styles.text}>Name</Text>
              <Text>{name}</Text>
            </View>
          </View>
          <FontAwesomeIcon icon={['fas', 'pen']} style={styles.icon} />
        </View>
      </TouchableNativeFeedback>
      <View style={styles.hr}>{}</View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}>
        <View style={styles.bottomView}>
          <View style={styles.modalView}>
            <Text style={styles.h1}>Enter your name</Text>
            <TextInput
              textContentType="name"
              value={username}
              style={styles.input}
              onChangeText={(value) => setUserName(value)}
              autoFocus
              keyboardType="default"
            />
            <View style={styles.buttons}>
              <TouchableHighlight
                style={styles.cancelButton}
                onPress={() => setShowModal(!showModal)}>
                <Text style={styles.textStyle}>CANCEL</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={handleSave}>
                <Text style={styles.textStyle}>SAVE</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const ChangeProfileDetails = () => {
  return (
    <View>
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
    padding: 20,
    backgroundColor: '#FFF',
  },
  profilePic: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  Div: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingFromIcon: {
    paddingLeft: 15,
  },
  icon: {
    color: '#7F58FF',
  },
  text: {
    color: '#7F58FF',
    marginBottom: 5,
  },
  hr: {
    borderBottomColor: '#7F58FF',
    borderBottomWidth: 1,
  },

  //------- modal style ------------------

  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalView: {
    backgroundColor: '#EEE',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 25,
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  h1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 25,
  },
  cancelButton: {
    marginRight: 40,
  },
  textStyle: {
    color: 'gray',
    fontWeight: 'bold',
  },
});

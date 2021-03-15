import React from 'react';
import { View, Text, Button } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

import MyTabs from './MyTabs';

const Drawer = createDrawerNavigator();

function LibraryDetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Total Member</Text>
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function HelpScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
    </View>
  );
}

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label="Custom Drawer" onPress={() => alert('Link to help')} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerPosition="left"
      drawerType="front"
      drawerStyle={{
        backgroundColor: '#c6cbef',
      }}
      overlayColor="transparent"
      drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Library Details " component={LibraryDetailsScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerLabel: 'Help',
          headerTitleAlign: 'center',
        }}
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

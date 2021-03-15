import React from 'react';
import { View, Text, Button, FlatList } from 'react-native';

const DATA = [
  {
    id: 0,
    name: 'Mama',
    phone_number: '01731103075',
  },
];

function MyContactScreen({ navigation, route }) {
  React.useEffect(() => {
    if (route.params?.name) {
      // Post updated, do something with `route.params.name`
      // For example, send the name to the server
      DATA.push({
        id: route.params.id,
        name: route.params.name,
        phone_number: route.params.number,
      });
    }
  }, [route.params.id, route.params.name, route.params.number]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        borderWidth: 25,
        borderColor: 'teal',
      }}>
      <Text>Home Screen</Text>
      <Button
        title="Add Contact"
        onPress={() => navigation.navigate('Add Contact')}
      />
      <FlatList
        renderItem={(obj) => (
          <View style={{ marginVertical: 20 }}>
            <Text>{obj.item.name}</Text>
            <Text>{obj.item.phone_number}</Text>
          </View>
        )}
        data={DATA}
      />
    </View>
  );
}

export default MyContactScreen;

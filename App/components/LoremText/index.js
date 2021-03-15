import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
// import {WebView} from 'react-native-webview';

const index = () => {
  return (
    <View style={styles.textContainer}>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
        commodi fugit, ea culpa numquam dolore eveniet veniam in nostrum nisi
        eius, quis nam corrupti et, voluptatibus repellendus consequuntur
        dolorum nihil.
      </Text>
      {/* <WebView
        source={{
          html: "<p style='text-align: justify;'>Justified text here</p>",
        }}
      /> */}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  textContainer: {
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#DDD',
  },
});

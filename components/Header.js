import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

/* Holds the header of Application*/

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>NY Times Top Stories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    padding: 10,
    marginBottom: 3,
  },
  headerText: {
    fontFamily: 'monospace',
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
  },
});

export default Header;

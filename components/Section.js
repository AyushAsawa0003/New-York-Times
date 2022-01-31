import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

/* This section contains a touchable like button which is used to
select the section from different section.
It also display it and when user press any section,
'section' state is set and api call is made to display the data*/

function Section({setSection, title}) {
  return (
    <View style={styles.sectionBar}>
      <TouchableOpacity
        style={styles.section}
        onPress={() => setSection(title)}>
        <Text style={styles.sectionText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionBar: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 2,
    paddingBottom: 10,
  },
  section: {
    backgroundColor: 'lightgrey',
    margin: 3,
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
    paddingRight: 5,
  },

  sectionText: {
    alignSelf: 'center',
    fontFamily: 'san-serif',
    color: 'black',
    fontSize: 18,
  },
});

export default Section;

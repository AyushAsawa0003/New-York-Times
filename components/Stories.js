import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from 'react-native';

/*
This file contains a function called getImage to get the Image of each Story/News
It displays the story with title, picture, abstract and Read more section where user can click and 
go to New York Times website for specific story
*/

function Stories({story}) {
  const getImage = () => {
    if (story.multimedia !== null) {
      return story.multimedia[0].url;
    } else {
      return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{story.title}</Text>
      <Image style={styles.img} source={{uri: getImage()}} />
      <Text style={styles.abstract}>{story.abstract}</Text>
      <TouchableOpacity>
        <Text
          style={styles.url}
          onPress={() => Linking.openURL(story.short_url)}>
          {' '}
          Read more
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 6,
    marginBottom: 4,
    borderBottomWidth: 2,
  },

  title: {
    fontSize: 26,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: 'bold',
  },

  img: {
    height: 250,
    width: 400,
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 3,
  },

  abstract: {
    fontSize: 16,
    padding: 1,
  },

  url: {
    fontSize: 16,
    color: 'blue',
    marginBottom: 2,
  },
});

export default Stories;

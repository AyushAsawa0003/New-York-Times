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
  //State to count the number of click
  const [clickCount, setClickCount] = useState(0);

  //for setting task is completed to default as false
  const [completed, setCompleted] = useState(false);

  //Function to count the click on '+'
  const countClick = () => {
    if (clickCount === 0) {
      setClickCount(1);
      setTimeout(() => clearCount(), 300); //After 100ms, the count will reset automatically
    } else if (clickCount === 1) {
      setCompleted(!completed);
      clearCount();
    }
  };

  //Clear the Click count
  const clearCount = () => {
    setClickCount(0);
  };

  //object to set color of text to highlight the news is read
  const colorChange = {
    color: completed ? '#bdad04' : 'grey',
  };

  //Function to get Image
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
      <Text onPress={() => countClick()} style={(styles.abstract, colorChange)}>
        {story.abstract}
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

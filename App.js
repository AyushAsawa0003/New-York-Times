import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Section from './components/Section';
import Stories from './components/Stories';

function App() {
  //Different sections
  const sections = [
    'home',
    'arts',
    'automobiles',
    'books',
    'business',
    'fashion',
    'food',
    'health',
    'home',
    'insider',
    'magazine',
    'movies',
    'nyregion',
    'obituaries',
    'opinion',
    'politics',
    'realestate',
    'science',
    'sports',
    'sundayreview',
    'technology',
    'theater',
    't - magazine',
    'travel',
    'upshot',
    'us',
    'world',
  ];

  //state to change the section
  const [section, setSection] = useState('home');

  //API for 'TOP Stories of NY times'
  const api = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=W7O0cIn6IY19xMmTHeT5Hk7ye4CjW9u1`;

  //state to hold the json data extracted from API
  const [data, setData] = useState([]);

  //API call function
  const getStories = async () => {
    try {
      const response = await fetch(api, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-type': 'application/json',
        },
      });

      const getData = await response.json();
      setData(getData);
    } catch (error) {
      console.error(error);
    }
  };

  //on when section is selected call the API call fuction
  useEffect(() => {
    getStories();
  }, [section]);

  return (
    <View style={styles.main}>
      <Header />
      <FlatList
        horizontal={true}
        data={sections}
        renderItem={({item}) => (
          <Section title={item} setSection={setSection} />
        )}
      />

      <FlatList
        data={data.results}
        renderItem={({item}) => <Stories story={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default App;

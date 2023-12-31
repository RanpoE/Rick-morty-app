import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import MainHeader from '../components/MainHeader'
import ScreenHeader from '../components/ScreenHeader'
import MainCharactersCarousel from '../components/MainCharactersCarousel'
import SectionHeader from '../components/SectionHeader'
import CharacterList from '../components/CharacterList'

const HomeScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        const { results } = data;
        console.log(results)
        setCharacters(results);
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <View style={styles.container}>
      <MainHeader title="App" />
      <ScreenHeader mainTitle="Rick & Morty" secondTitle="Adventures" />
      <ScrollView>
        <MainCharactersCarousel list={characters} />
        <SectionHeader title="Popular characters" buttonTitle='See more' />
        <CharacterList list={characters} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default HomeScreen
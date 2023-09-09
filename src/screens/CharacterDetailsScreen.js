import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const CharacterDetailsScreen = ({ navigation, route }) => {
    const { character } = route.params
    return (
        <View style={styles.container}>
            <Image style={{ width: '100%', height: '100%', resizeMode: 'cover' }} source={{ uri: character.image }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default CharacterDetailsScreen
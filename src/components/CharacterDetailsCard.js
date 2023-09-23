import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import * as Animatable from 'react-native-animatable'

const CharacterDetailsCard = ({ character }) => {
    return (
        <View style={styles.card}>
            <Animatable.View style={styles.header}
                animation="fadeInUp"
                delay={500}
                easing="ease-in-out"
                duration={400}
                >
                <Text style={styles.title}>{character.name}</Text>
                <Text style={styles.sub}>{character.species}</Text>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%'
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    sub: {
        fontSize: 20,
    }
})

export default CharacterDetailsCard
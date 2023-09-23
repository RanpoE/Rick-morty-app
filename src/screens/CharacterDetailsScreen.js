import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import { Arrow } from '../../assets/images'
import CharacterDetailsCard from '../components/CharacterDetailsCard'
import Icon from '../components/Icon'

const CharacterDetailsScreen = ({ navigation, route }) => {
    const insets = useSafeAreaInsets()
    const { character } = route.params
    return (
        <View style={styles.container}>
            <Animatable.View style={[styles.backButton, { marginTop: insets.top + 20 }]}
                animation="fadeIn"
                delay={500}
                easing="ease-in-out"
                duration={400}
            >
                <Icon icon={Arrow} size={30} onPress={navigation.goBack} />
            </Animatable.View>
            <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
                <Image source={{ uri: character.image }}
                    style={[StyleSheet.absoluteFillObject, styles.image]}
                />
            </View>
            <CharacterDetailsCard character={character} />
        </View>
    )
}

CharacterDetailsScreen.sharedElements = route => {
    const { character } = route.params
    return [
        {
            id: `character.${character.id}.image`
        }
    ]
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    backButton: {
        height: 40,
        width: 100,
        position: 'absolute',
        left: 20,
        zIndex: 1
    }
})

export default CharacterDetailsScreen
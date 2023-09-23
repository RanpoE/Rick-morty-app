import React from 'react'
import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SharedElement } from 'react-navigation-shared-element'

const CARD_WIDTH = 160
const CARD_HEIGHT = 220

const CharacterList = ({ list }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {
                list.map((item, index) => {
                    return (
                        <Pressable key={index} onPress={() => {
                            navigation.navigate('CharacterDetail', { character: item })
                        }}>
                            <View style={styles.card} >
                                <SharedElement id={`character.${item.id}.image`}>
                                <View style={styles.imageBox}>
                                    <Image style={styles.image} source={{ uri: item.image }} />
                                </View>
                                </SharedElement>
                                <View>
                                    <View>
                                        <Text>{item.name}</Text>
                                    </View>
                                </View>
                            </View>
                        </Pressable>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
    },
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        flexWrap: 'wrap',
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT - 60,
        resizeMode: 'cover'
    },
})

export default CharacterList
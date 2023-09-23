import React from 'react'
import { FlatList, StyleSheet, Text, Pressable, View, Dimensions, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import FavoriteButton from './FavoriteButton';
import { SharedElement } from 'react-navigation-shared-element';


const { width } = Dimensions.get('window')
const CARD_WIDTH = width - 60;
const CARD_HEIGHT = 200;

const MainCharactersCarousel = ({ list }) => {
    const navigation = useNavigation()
    return (
        <FlatList
            data={list.splice(0, 4)}
            horizontal
            keyExtractor={i => i.id}
            decelerationRate='fast'
            renderItem={({ item, index }) => {
                return (
                    <Pressable style={{
                        marginLeft: 10,
                        marginRight: index === list.length - 1 ? 10 : 0
                    }}
                        onPress={() => navigation.navigate('CharacterDetail', { character: item })}
                    >
                        <View style={styles.card}>
                            <FavoriteButton style={styles.favorites} active={true} />
                            <SharedElement id={`character.${item.id}.image`} style={
                                StyleSheet.absoluteFillObject
                            }>
                                <View style={styles.imageBox}>
                                    <Image source={{ uri: item.image }} style={styles.image} />
                                </View>
                            </SharedElement>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.species}>{item.species}</Text>
                            </View>
                        </View>
                    </Pressable>
                )
            }}
            showsVerticalScrollIndicator={false}
        />
    )
}
const styles = StyleSheet.create({
    card: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        marginVertical: 10
    },
    imageBox: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        resizeMode: 'cover'
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    favorites: {
        position: 'absolute',
        top: 15,
        right: 15,
        zIndex: 100
    }
})

export default MainCharactersCarousel
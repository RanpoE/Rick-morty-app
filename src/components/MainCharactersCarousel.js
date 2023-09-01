import React from 'react'
import { FlatList, StyleSheet, Text, Pressable, View, Dimensions, Image } from 'react-native'


const { width } = Dimensions.get('window')
const CARD_WIDTH = width - 60;
const CARD_HEIGHT = 200;

const MainCharactersCarousel = ({ list }) => {
    return (
        <FlatList
            data={list}
            horizontal
            keyExtractor={i => i.id}
            decelerationRate='fast'
            renderItem={({ item, index }) => {
                return (
                    <Pressable style={{
                        marginLeft: 10,
                        marginRight: index === list.length - 1 ? 10 : 0
                    }}>
                        <View style={styles.card}>
                            <View style={styles.imageBox}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </View>
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
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    titleBox: {
        position: 'absolute',
        top: CARD_HEIGHT - 80,
        left: 16
    }
})

export default MainCharactersCarousel
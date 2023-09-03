import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const CharacterList = ({ list }) => {
    return (
        <View style={styles.container}>
            {
                list.map((item, index) => {
                    return (
                        <View style={styles.card} key={index}>
                            <View>
                                <Image style={styles.image} source={item.image} />
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {

    },
    image: {
        width: 100,
        height: 100
    }
})

export default CharacterList
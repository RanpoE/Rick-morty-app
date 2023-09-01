import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ScreenHeader = ({ mainTitle, secondTitle }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.mainTitle}>{mainTitle}</Text>
            <Text style={styles.secondTitle}>{secondTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    secondTitle: {
        fontSize: 22
    }
  })

export default ScreenHeader
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const SectionHeader = ({title, onPress, buttonTitle='Button'}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Button style={styles.button} title={buttonTitle} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: 10,
    },
    title: {
        fontSize: 18
    },
})

export default SectionHeader
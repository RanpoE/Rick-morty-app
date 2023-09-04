import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSafeAreaFrame, useSafeAreaInsets } from 'react-native-safe-area-context'
import { Hamburger, Earth } from '../../assets/images'
import Icon from './Icon'

const MainHeader = ({ title }) => {
    const insets = useSafeAreaInsets()
    return (
        <View style={[styles.container, { marginTop: insets.top + 10 }]}>
            <Icon icon={Hamburger} size={20} />
            <Text style={styles.title}>{title}</Text>
            <Icon icon={Earth} size={28} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default MainHeader
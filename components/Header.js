import React from 'react'
import { StyleSheet, View, Text } from 'react-native-web'
import { Link } from 'expo-router'

const Header = () => {
    return (
        <View style={styles.nav}> 
            <Link href="/">Home </Link>
            <Link href="/character/1">|Rick|</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    nav: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'yellow',
        padding: 10,
    }
});

export default Header
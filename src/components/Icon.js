import React from 'react'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Icon = ({ onPress, icon, size }) => {
    const image = (
        <Image source={icon} style={{
            width: size,
            height: size,
            resizeMode: 'cover'
        }} />
    )
    if (onPress) {
        return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>
    }
    return image;
}

export default Icon
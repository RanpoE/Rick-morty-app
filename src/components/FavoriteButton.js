import React from 'react'
import { View } from 'react-native'
import { Favorite, Star } from '../../assets/images'
import Icon from './Icon'

const FavoriteButton = ({ active, style }) => {
    return (
        <View style={[{
            backgroundColor: 'white',
            padding: 4,
            borderRadius: 20,
        }, style]}>
            <Icon icon={active ? Star : Favorite} size={25} />
        </View>
    )
}

export default FavoriteButton
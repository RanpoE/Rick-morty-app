import React from 'react'
import { View } from 'react-native'

const Divider = ({ style, enabledSpacing = true }) => {
    return (
        <View
            style={[
                {
                    height: 1,
                    backgroundColor: 'grey',
                    marginHorizontal: enabledSpacing ? 20 : 0,
                },
                style
            ]}
        />
    )
}

export default Divider
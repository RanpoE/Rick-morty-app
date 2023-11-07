import React, { useMemo } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Star } from '../../../assets/images'
import Icon from '../../components/Icon'
import * as Animatable from 'react-native-animatable'
import BottomeSheet, { BottomSheetScrollView } from '@gorhom/bottom-sheet'
import CustomHandler from './CustomHandler'
import CustomBackground from './CustomBackground'
import Animated, { useAnimatedStyle, interpolateColor, useSharedValue, interpolate, Extrapolate } from 'react-native-reanimated'
import Divider from '../shared/Divider'
import SectionHeader from '../SectionHeader'


const CharacterDetailsCard = ({ character }) => {
    const snapPoints = useMemo(() => ['30%', '80%'], [])
    const animatedIndex = useSharedValue(0)

    const titleStyle = useAnimatedStyle(() => ({
        color: interpolateColor(animatedIndex.value, [0, 0.08], ['white', 'black']),
        marginBottom: interpolate(animatedIndex.value, [0, 0.08], [0, 10], Extrapolate.CLAMP)
    }))

    const subStyle = useAnimatedStyle(() => ({
        color: interpolateColor(animatedIndex.value, [0, 0.08], ['white', 'grey']),
        fontSize: interpolate(animatedIndex.value, [0, 0.08], [20, 14], Extrapolate.CLAMP)
    }))

    const iconStyle = useAnimatedStyle(() => ({
        transform: [
            { scale: interpolate(animatedIndex.value, [0, 0.08], [0, 1], Extrapolate.CLAMP) }
        ]
    }))

    return (
        <BottomeSheet
            index={0}
            animatedIndex={animatedIndex}
            backgroundComponent={CustomBackground}
            snapPoints={snapPoints}
            handleComponent={CustomHandler}
        >
            <View style={{}}>
                <Animatable.View style={styles.header}
                    animation="fadeInUp"
                    delay={500}
                    easing="ease-in-out"
                    duration={400}
                >
                    <Animated.Text style={[styles.title, titleStyle]}>{character.name}</Animated.Text>
                    <View style={styles.subCont}>
                        <Animated.Text style={[styles.sub, subStyle]}>{character.species}</Animated.Text>
                        <Animated.Text style={iconStyle}>
                            <Icon icon={Star} size={14} style={iconStyle} />
                        </Animated.Text>
                    </View>
                </Animatable.View>
            </View>
            <Divider />
            {/* <BottomSheetScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <SectionHeader title='Origin' />
            </BottomSheetScrollView> */}
        </BottomeSheet>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subCont: {
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    sub: {
        fontSize: 20,
    }
})

export default CharacterDetailsCard
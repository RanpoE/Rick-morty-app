import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/HomeScreen'
import SearchScreen from '../screens/SearchScreen'
import { Animated, StyleSheet, Dimensions } from 'react-native'
import { Rick, Search, Star } from '../../assets/images'
import FavoritesScreen from '../screens/FavoritesScreen'
import Icon from '../components/Icon'


const tabs = [
    {
        name: 'Home',
        screen: HomeScreen,
        icon: Rick
    },
    {
        name: 'Search',
        screen: SearchScreen,
        icon: Search
    },
    {
        name: 'Favorites',
        screen: FavoritesScreen,
        icon: Star
    },
]

const { width } = Dimensions.get('window')
const Tab = createBottomTabNavigator()


const TabNavigator = () => {
    const offsetAnimation = React.useRef(new Animated.Value(0)).current;
    return (
        <>
            <Tab.Navigator initialRouteName='Home' screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}>
                {
                    tabs.map(({ name, screen, icon }, index) => {
                        return <Tab.Screen key={name} name={name} component={screen} options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <Icon
                                        icon={icon}
                                        size={40}
                                        style={{
                                        }}
                                    />
                                )
                            }
                        }}
                            listeners={{
                                focus: () => {
                                    Animated.spring(offsetAnimation, {
                                        toValue: index * width / 3,
                                        useNativeDriver: true
                                    }).start();
                                }
                            }}
                        />
                    })
                }
            </Tab.Navigator>
            <Animated.View style={[styles.indicator, {
                transform: [{
                    translateX: offsetAnimation,
                }]
            }]}>

            </Animated.View>
        </>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        width: 10,
        height: 2,
        bottom: 0,
        left: width / 3 / 2 - 5,
        backgroundColor: 'blue',
        zIndex: 100,
    }
})
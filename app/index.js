import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Rick } from '../assets/images';
import { useEffect, useState } from 'react';


function LogoTitle() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={Rick}
        />
    );
}

const Characters = ({ characters }) => {
    return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 6 }}>
            {
                characters.map(i =>
                    <Link key={i.id} style={{ height: 180}}
                        href={{ pathname: 'character/[id]', params: { id: i.id, name: i.name } }}>
                        <Image
                            style={{ width: 120, height: 100, borderRadius: 10 }}
                            source={{ uri: i.image }}
                        />
                    </Link>)
            }
        </View>
    )

}


export default function Page() {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const { results } = data;
                // console.log(results)
                setCharacters(results);
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', color: 'whiter' }} className=' bg-slate-800'>
            <Stack.Screen
                options={{
                    // https://reactnavigation.org/docs/headers#setting-the-header-title
                    title: 'My home',
                    // https://reactnavigation.org/docs/headers#adjusting-header-styles
                    headerStyle: { backgroundColor: '#f4511e' },
                    headerTintColor: '#fff',
                    // headerTitleStyle: {
                    //     fontWeight: 'bold',
                    // },
                    // https://reactnavigation.org/docs/headers#replacing-the-title-with-a-custom-component
                    headerTitle: props => <LogoTitle {...props} />,
                }}
            />
            <Text className='text-white text-lg'>Rick and Morty characters</Text>
            <ScrollView>
                <Characters characters={characters} />
            </ScrollView>
        </View>
    );
}
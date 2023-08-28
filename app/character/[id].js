
import { useLocalSearchParams, Stack } from 'expo-router';

import { View, Text } from 'react-native';

export default function Page() {
  const { id, name } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen
        options={{
          title: name,
        }}
      />
      <Text className='bg-slate-800 text-white'>Character: {id}</Text>
    </View>
  );
}

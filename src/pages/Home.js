import React from 'react';
import { View, Text } from 'react-native';

export function Home() {
  return (
    <View style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text>React Native</Text>
      <Text>Ignite</Text>
    </View>
  );
}
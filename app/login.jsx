import { View, Text } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function Login() {
	return (
		<View style={{ flex: 1, backgroundColor: 'blue' ,alignItems:"center",justifyContent:"center" }}>
			<Text>login</Text>
			<StatusBar hidden/>
		</View>
	);
}

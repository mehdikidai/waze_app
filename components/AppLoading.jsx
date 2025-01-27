import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';

export default function AppLoading() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<ActivityIndicator size="large" color="#fff" />
			<Text>Loading...</Text>
		</View>
	);
}

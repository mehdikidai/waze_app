import { View, Text, ActivityIndicator } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

export default function AppLoading() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
			<ActivityIndicator size="large" color={Colors.tint} />
		</View>
	);
}

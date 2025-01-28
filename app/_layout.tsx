import { Stack } from 'expo-router';
import { Platform } from 'react-native';
import { useEffect } from 'react';




export default function RootLayout() {
	return (
		
			<Stack>
				<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				<Stack.Screen name="login" options={{ headerShown: false }} />
			</Stack>
		
	);
}

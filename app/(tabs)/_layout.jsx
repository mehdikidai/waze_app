import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import IconBar from '@/components/iconBar';
import { Colors } from '@/constants/Colors';

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				headerStyle: {
					backgroundColor: Colors.tabBar,
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold',
					textTransform: 'capitalize',
				},
				tabBarStyle: {
					backgroundColor: Colors.tabBar,
					height: 60,
					borderTopColor: '#fff0',
				},
				tabBarShowLabel: true,
				tabBarActiveTintColor: Colors.tabIconSelected,
				tabBarInactiveTintColor: Colors.tabIconDefault,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: 'map',
					headerShown: false,
					tabBarIcon: ({ color }) => <IconBar name="map" txt="Home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="search"
				options={{
					title: 'search',
					headerShown: false,
					tabBarIcon: ({ color }) => <IconBar name="search" txt="Home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: 'profile',
					headerShown: false,
					tabBarIcon: ({ color }) => <IconBar name="account-circle" txt="Home" color={color} />,
				}}
			/>
			<Tabs.Screen
				name="setting"
				options={{
					title: 'setting',
					headerShown: false,
					tabBarIcon: ({ color }) => <IconBar name="settings" txt="Home" color={color} />,
				}}
			/>
		</Tabs>
	);
}

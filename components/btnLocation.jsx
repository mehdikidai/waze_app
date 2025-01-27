import { View, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import Icon from '@expo/vector-icons/MaterialIcons';
import { Colors } from '@/constants/Colors';

export default function BtnLocation({...props}) {
	return (
		<TouchableOpacity style={styles.locationButton} {...props}>
			<View style={styles.iconContainer}>
				<Icon name="location-searching" size={20} color={Colors.tint} />
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	locationButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 10,
	},
	iconContainer: {
		width: 36,
		height: 36,
		backgroundColor: Colors.tabBar,
		borderRadius: 20,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	}
});

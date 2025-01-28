import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function InputBox({ placeholder = 'Placeholder', children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.label}>{placeholder}</Text>
			<View style={styles.container}>{children}</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginVertical: 0,
		//backgroundColor:'red'
	},
	label: {
		color: 'black',
		fontWeight: 'bold',
		fontSize: 15,
		marginBottom: 5,
	}
});

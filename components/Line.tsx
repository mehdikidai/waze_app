import { View, StyleSheet } from 'react-native';
import React from 'react';

type PropsLine = {
	space?: number;
	color?: string;
};

export default function Line({ space = 10, color = '#666' }: PropsLine) {
	return (
		<View
			style={[
				styles.line,
				{
					marginHorizontal: space,
					backgroundColor: color,
				},
			]}
		/>
	);
}

const styles = StyleSheet.create({
	line: {
		marginVertical: 10,
		height: 1,
	},
});

import { View, Text } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const IconBar = ({ color, name = 'home' }) => {
	return (
		<>
			<View style={{ }}>
				<MaterialIcons name={name} size={22} color={color}  />
			</View>
		</>
	);
};

export default IconBar;

import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	TextInput,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import InputBox from '@/components/InputBox';

export default function Login() {

	const { width: WIDTH } = Dimensions.get('screen');

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');



	return (
		<KeyboardAvoidingView
			style={[styles.container, { backgroundColor: Colors.tint }]}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<Text style={styles.title}>Login</Text>
			
			<View style={[styles.boxForm, { width: WIDTH - 30, backgroundColor: '#fff' }]}>
				<InputBox placeholder="Email">
					<TextInput
						style={styles.inputStyle}
						placeholder="your email"
						value={email}
						onChangeText={setEmail}
					/>
				</InputBox>
				<InputBox placeholder="Password">
					<TextInput
						style={styles.inputStyle}
						placeholder="password"
						secureTextEntry
						value={password}
						onChangeText={setPassword}
					/>
				</InputBox>
			</View>
			<StatusBar hidden />
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'flex-start',
		paddingVertical: 100,
		gap: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 20,
	},
	boxForm: {
		gap: 10,
		paddingHorizontal: 20,
		paddingVertical: 50,
		borderRadius: 6,
	},
	inputStyle: {
		borderWidth: 1,
		borderColor: '#666',
		borderRadius: 6,
		fontSize: 16,
		color: '#333',
		paddingVertical: 10,
		paddingHorizontal: 12,
	},
});

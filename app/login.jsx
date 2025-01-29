import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';
import InputBox from '@/components/InputBox';
import Btn from '@/components/Btn';
import axios from 'axios';

export default function Login() {
	const { width: WIDTH } = Dimensions.get('screen');
	const apiUrl = process.env.EXPO_PUBLIC_API_URL;
	const [loading, setLoading] = useState(false);


	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = async () => {
		console.log(apiUrl);
		try {
			setLoading(true);
			const response = await axios.post(
				'http://127.0.0.1:8000/api/auth/login',
				{
					email: email,
					password: password,
				},
				
			);
			console.log(response);
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<KeyboardAvoidingView
			style={[styles.container, { backgroundColor: Colors.tint }]}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}
		>
			<Text style={styles.title}>welcome back</Text>

			<View style={[styles.boxForm, { width: WIDTH - 30, backgroundColor: Colors.background }]}>
				<InputBox placeholder="Email">
					<TextInput style={styles.inputStyle} placeholder="your email" value={email} onChangeText={setEmail} />
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
				<Btn
					style={{ marginTop: 10 }}
					background={Colors.tint}
					text={loading ? 'Loading...' : 'Login'}
					onPress={handleLogin}
					disabled={loading}
				/>
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
		fontSize: 26,
		fontWeight: 'bold',
		color: 'white',
		marginBottom: 20,
	},
	boxForm: {
		gap: 10,
		paddingHorizontal: 20,
		paddingVertical: 40,
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
		backgroundColor: '#fff',
	},
});

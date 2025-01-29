import { View, Text, StyleSheet, Dimensions, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '@/constants/Colors';
import InputBox from '@/components/InputBox';
import Btn from '@/components/Btn';
import axios from 'axios';
import { storeData } from '@/helper/storage';
import { router } from 'expo-router';
import useUserStore from '@/store/userStore';

export default function Login() {
	const { width: WIDTH } = Dimensions.get('screen');
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;
	const [loading, setLoading] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const Store = useUserStore();

	const handleLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

			await storeData('user', {
				email: response.data.data.email || 'user',
				name: response.data.data.name,
				avatar: response.data.data.avatar,
				phone: '0605805995',
				token: response.data.data.token,
				verified: response.data.data.verified,
				isLogin: true,
			});

			Store.updateName(response.data.data.name);
			Store.updateEmail(response.data.data.email);
			Store.updateAvatar(response.data.data.avatar);
			Store.updatePhone(response.data.data?.phone || '0605805995');
			Store.updateToken(response.data.data.token);
			Store.updateVerified(response.data.data.verified);
			Store.updateIsLogin(true);

			router.push({ pathname: '/(tabs)/profile' });
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
			{/* <StatusBar hidden /> */}
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

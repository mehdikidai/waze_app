import {
	View,
	Text,
	StyleSheet,
	Image,
	Dimensions,
	ScrollView,
	TextInput,
	TouchableOpacity,
	Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import AppSetup from '@/components/AppSetup';
import AppLoading from '@/components/AppLoading';
import useUserStore from '@/store/userStore';
import mkWait from 'mk_wait';
import { Colors } from '@/constants/Colors';
import InputBox from '@/components/InputBox';
import Icon from '@expo/vector-icons/FontAwesome6';
import Line from '@/components/Line';
import { Link } from 'expo-router';
import { clearAllData } from '@/helper/storage';
import { router } from 'expo-router';
import axios from 'axios';
import { Authorization } from '@/helper/auth';

const SPACE = 15;

export default function Profile() {
	const [loading, setLoading] = useState(true);
	const { name, email, avatar, phone, token, isLogin, resetUser } = useUserStore();
	const [nameForm, setNameForm] = useState(name || '');
	const [emailForm, setEmailForm] = useState(email || '');
	const [phoneForm, setPhoneForm] = useState(phone || '');
	const { width: windowWidth } = Dimensions.get('window');
	const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

	useEffect(() => {
		async function sleep() {
			await mkWait(1500);
			setLoading(false);
		}

		sleep();
	}, []);

	const handleLogout = async () => {
		if (!token) {
			console.log('No token found');
			return;
		}

		try {
			const response = await axios.post(
				`${API_BASE_URL}/auth/logout`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				resetUser();
				await clearAllData();
				router.push({ pathname: '/' });
			}
		} catch (error) {
			console.log(error);
			Alert.alert('Error', 'An error occurred while logging out.');
		}
	};

	if (loading) {
		return <AppLoading />;
	}

	return (
		<AppSetup>
			{isLogin ? (
				<ScrollView>
					<View style={[styles.boxProfile, { backgroundColor: '#97c6d1', width: windowWidth }]}>
						<View style={[styles.boxOne]}>
							<View style={[styles.boxIcon, { backgroundColor: Colors.tint }]}>
								<Icon name="check" size={14} color="#fff" />
							</View>
							<View
								style={[
									styles.boxPhoto,
									{ backgroundColor: Colors.background, borderColor: Colors.background },
								]}
							>
								<Image
									style={styles.avatar}
									source={{
										uri:
											avatar || 'https://cdn.pixabay.com/photo/2019/10/10/18/51/smartphone-4540273_640.jpg',
									}}
								/>
							</View>
						</View>

						<Text style={{ fontSize: 22, color: Colors.text, fontWeight: 800 }}>{name}</Text>

						<Text style={{ fontSize: 14, color: Colors.text, opacity: 0.5 }}>{email}</Text>
					</View>
					<View style={{ marginBlock: 20, marginInline: SPACE, gap: 10 }}>
						<InputBox placeholder="Name">
							<TextInput style={styles.inputStyle} onChangeText={setNameForm} value={nameForm} />
						</InputBox>
						<InputBox placeholder="Email">
							<TextInput style={styles.inputStyle} onChangeText={setEmailForm} value={emailForm} />
						</InputBox>
						<InputBox placeholder="Phone">
							<TextInput style={styles.inputStyle} onChangeText={setPhoneForm} value={phoneForm} />
						</InputBox>

						<TouchableOpacity>
							<View style={[styles.btn, { backgroundColor: Colors.tint }]}>
								<Text style={[styles.textBtn, { color: Colors.text }]}>{'Update Profile'}</Text>
							</View>
						</TouchableOpacity>
					</View>

					<Line space={SPACE} />

					<View style={{ marginBlock: 10, marginInline: SPACE }}>
						<TouchableOpacity onPress={handleLogout}>
							<View style={[styles.btn, { backgroundColor: '#e54b4b' }]}>
								<Text style={[styles.textBtn, { color: Colors.text }]}>{'Logout'}</Text>
							</View>
						</TouchableOpacity>
					</View>
				</ScrollView>
			) : (
				<View>
					<Text>login</Text>
					<Link href={'/login'}>go to login</Link>
				</View>
			)}
		</AppSetup>
	);
}

const styles = StyleSheet.create({
	boxProfile: {
		height: 230,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 2,
		borderRadius: 6,
	},
	boxOne: {
		marginBottom: 12,
		position: 'relative',
	},
	boxIcon: {
		width: 24,
		height: 24,
		backgroundColor: '#52b788',
		position: 'absolute',
		right: 4,
		top: 82,
		zIndex: 2,
		borderRadius: 12,
		alignItems: 'center',
		justifyContent: 'center',
	},
	boxPhoto: {
		width: 120,
		height: 120,
		backgroundColor: '#0000',
		borderRadius: 60,
		overflow: 'hidden',
		borderWidth: 5,
	},
	avatar: {
		width: 120,
		height: 120,
		objectFit: 'cover',
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

	btn: {
		backgroundColor: 'red',
		padding: 12,
		borderRadius: 6,
		marginTop: 10,
		alignItems: 'center',
	},
	textBtn: {
		fontSize: 14,
		fontWeight: 500,
	},
});

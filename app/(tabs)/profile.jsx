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

const SPACE = 15;

export default function Profile() {
	const [loading, setLoading] = useState(true);
	const { name, email, avatar, phone, isLogin } = useUserStore();

	const [nameForm, setNameForm] = useState(name || '');
	const [emailForm, setEmailForm] = useState(email || '');
	const [phoneForm, setPhoneForm] = useState(phone || '');

	const { width: windowWidth } = Dimensions.get('window');

	useEffect(() => {
		async function sleep() {
			await mkWait(5000);
			setLoading(false);
		}

		sleep();
	}, []);

	const handleName = (e) => setNameForm(e);
	const handleEmail = (e) => setEmailForm(e);
	const handlePhone = (e) => setPhoneForm(e);

	const handleLogout = () => {
		Alert.alert('Logout', 'nta drti logout daba nod 3la slamtek', [
			{ text: 'safi', onPress: () => console.log('logout') },
		]);
	};


	if (loading) {
		return <AppLoading />;
	}

	return (
		<AppSetup>
			{isLogin ? (
				<ScrollView style={{ paddingBottom: SPACE }}>
					<View
						style={[
							styles.boxProfile,
							{ backgroundColor: '#97c6d1', width: windowWidth - SPACE * 2, marginInline: SPACE },
						]}
					>
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

						<Text style={{ fontSize: 22, color: Colors.text, fontWeight: 800 }}>{name || 'mehdi kidai'}</Text>

						<Text style={{ fontSize: 14, color: Colors.text, opacity: 0.5 }}>
							{email || 'mehdikidai@gmail.com'}
						</Text>
					</View>
					<View style={{ marginBlock: 20, marginInline: SPACE, gap: 10 }}>
						<InputBox placeholder="Name">
							<TextInput style={styles.inputStyle} onChangeText={handleName} value={nameForm} />
						</InputBox>
						<InputBox placeholder="Email">
							<TextInput style={styles.inputStyle} onChangeText={handleEmail} value={emailForm} />
						</InputBox>
						<InputBox placeholder="Phone">
							<TextInput style={styles.inputStyle} onChangeText={handlePhone} value={phoneForm} />
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
		height: 240,
		alignItems: 'center',
		justifyContent: 'center',
		gap: 2,
		marginTop: 15,
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

	// input

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

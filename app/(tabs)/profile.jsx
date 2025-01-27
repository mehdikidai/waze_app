import { View, Text, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppSetup from '@/components/AppSetup';
import { useNavigation } from 'expo-router';
import axios from 'axios';
import AppLoading from '@/components/AppLoading';

export default function Profile() {
	const navigation = useNavigation();
	const [isAuth, setIsAuth] = useState(false);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
				console.log(res.data);
				setData(res.data);
				if (res.status === 200) setIsAuth(true);
			} catch (error) {
				console.log(error.message);
				setIsAuth(false);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	if (loading) {
		return <AppLoading />;
	}

	return (
		<AppSetup>
			{isAuth ? (
				<View>
					<Text>Profile</Text>
					{data.slice(0, 5).map((item) => (
						<View key={item.id} style={{ marginVertical: 5 }}>
							<Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
							<Text>{item.body}</Text>
						</View>
					))}
				</View>
			) : (
				<View>
					<Text>login</Text>
				</View>
			)}
		</AppSetup>
	);
}

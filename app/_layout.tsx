import { Stack } from 'expo-router';
import { useEffect } from 'react';
import { getData } from '@/helper/storage';
import { UserType } from '@/types';
import useUserStore from '@/store/userStore';

export default function RootLayout() {

	const store = useUserStore();

	const loadUser = async () => {
		try {

			const user = await getData<UserType>('user');

			if (user) {
				
				store.updateName(user.name ?? '');
				store.updateEmail(user.email ?? '');
				store.updatePhone(user.phone ?? '');
				store.updateToken(user.token ?? '');
				store.updateAvatar(user.avatar ?? '');
				store.updateIsLogin(user.isLogin);

			}

		} catch (error) {

			console.error('خطأ أثناء تحميل بيانات المستخدم:', error);

		}
	};

	useEffect(() => {
		loadUser();
	}, []);

	return (

		<Stack>
			<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
			<Stack.Screen name="login" options={{ headerShown: false }} />
		</Stack>

	);
}

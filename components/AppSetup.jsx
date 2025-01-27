import { SafeAreaView, Text, View, StatusBar as St } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '@/constants/Colors';

export default function AppSetup({ children }) {
	let statusbar = St.currentHeight;
	return (
		<View style={{ backgroundColor: '#dff2f7', flex: 1, marginTop: statusbar }}>
			{children}
			<StatusBar style="light" backgroundColor={Colors.tabBar} />
		</View>
	);
}

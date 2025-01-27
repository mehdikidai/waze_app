import React, { useRef } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import AppSetup from '@/components/AppSetup';
import { Colors } from '@/constants/Colors';
import useLocation from "@/hooks/useLocation"
import BtnLocation from '@/components/btnLocation';

const INITIAL_REGION = {
	latitude: 48.866667,
	longitude: 2.333333,
	latitudeDelta: 1.5,
	longitudeDelta: 1.5,
};

const markers = [
	{ latitude: 34.05, longitude: -118.25 },
	{ latitude: 34.01, longitude: -118.26 },
	{ latitude: 34.02, longitude: -118.27 },
	{ latitude: 34.03, longitude: -118.28 },
	{ latitude: 34.04, longitude: -118.29 },
];

const Page = () => {

	const mapRef = useRef(null);
	const { location, errorMsg } = useLocation();


	const goLocation = () => {

		if (location) {
			mapRef.current?.animateCamera(
				{
					center: location,
					zoom: 15,
				},
				{ duration: 2000 }
			);
		} else {
			alert('Location is not available yet.');
		}
	};

	return (
		<AppSetup>

			<View style={styles.container}>

				{ location && <BtnLocation onPress={goLocation}/> }

				<MapView
					style={styles.map}
					provider={PROVIDER_GOOGLE}
					initialRegion={INITIAL_REGION}
					ref={mapRef}
				>
					{markers.map((marker, index) => (
						<Marker
							key={index}
							coordinate={{
								latitude: marker.latitude,
								longitude: marker.longitude,
							}}
						/>
					))}
				</MapView>

				{errorMsg && <Text style={styles.errorText}>{errorMsg}</Text>}

			</View>
		</AppSetup>
	);
};

export default Page;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		width: '100%',
		height: '100%',
	},
	locationButton: {
		position: 'absolute',
		top: 20,
		right: 20,
		zIndex: 10,
	},
	iconContainer: {
		width: 36,
		height: 36,
		backgroundColor: Colors.tabBar,
		borderRadius: 20,
		overflow: 'hidden',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	errorText: {
		position: 'absolute',
		bottom: 20,
		alignSelf: 'center',
		color: 'red',
		fontSize: 14,
	},
});

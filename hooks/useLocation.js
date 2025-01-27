import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

const useLocation = () => {
	const [location, setLocation] = useState(null);
	const [errorMsg, setErrorMsg] = useState(null);

	useEffect(() => {
		const fetchLocation = async () => {
			
			let { status } = await Location.requestForegroundPermissionsAsync();
			if (status !== 'granted') {
				setErrorMsg('Permission to access location was denied');
				return;
			}

			try {
				
				const currentLocation = await Location.getCurrentPositionAsync({});
				setLocation({
					latitude: currentLocation.coords.latitude,
					longitude: currentLocation.coords.longitude,
					latitudeDelta: 0.05,
					longitudeDelta: 0.05,
				});
			} catch (error) {
				setErrorMsg('Error fetching location');
				console.error('Error fetching location: ', error);
			}
		};

		fetchLocation();
	}, []); 

	return { location, errorMsg };
	
};

export default useLocation;

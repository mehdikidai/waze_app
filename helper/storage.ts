import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeData = async <T>(key: string, data: T): Promise<boolean> => {
	try {
		const jsonValue = JSON.stringify(data);
		await AsyncStorage.setItem(key, jsonValue);
		console.log(`Data successfully saved under the key: ${key}`);
		return true;
	} catch (error) {
		console.warn(`Error while storing data under the key: ${key}`, error);
		return false;
	}
};

export const getData = async <T>(key: string): Promise<T | null> => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		if (jsonValue) {
			return JSON.parse(jsonValue) as T;
		}
		console.log(`No data found under the key: ${key}`);
		return null;
	} catch (error) {
		console.warn(`Error while retrieving data under the key: ${key}`, error);
		return null;
	}
};

export const clearAllData = async (): Promise<boolean> => {
	try {
		await AsyncStorage.clear();
		console.log('All data has been deleted...');
		return true;
	} catch (error) {
		console.warn('Error while clearing all data:', error);
		return false;	
	}
};

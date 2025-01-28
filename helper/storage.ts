import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async <T>(key: string, data: T): Promise<boolean> => {
	try {
		const jsonValue = JSON.stringify(data);
		await AsyncStorage.setItem(key, jsonValue);
		console.log(`تم حفظ البيانات بنجاح تحت المفتاح: ${key}`);
		return true;
	} catch (error) {
		console.warn(`خطأ أثناء تخزين البيانات تحت المفتاح: ${key}`, error);
		return false;
	}
};

export const getData = async <T>(key: string): Promise<T | null> => {
	try {
		const jsonValue = await AsyncStorage.getItem(key);
		if (jsonValue) {
			return JSON.parse(jsonValue) as T;
		}
		console.log(`لا توجد بيانات تحت المفتاح: ${key}`);
		return null;
	} catch (error) {
		console.warn(`خطأ أثناء استرجاع البيانات تحت المفتاح: ${key}`, error);
		return null;
	}
};

export const clearAllData = async (): Promise<boolean> => {
	try {
		await AsyncStorage.clear();
		console.log('تم مسح جميع البيانات بنجاح');
		return true;
	} catch (error) {
		console.warn('خطأ أثناء مسح جميع البيانات:', error);
		return false;
	}
};

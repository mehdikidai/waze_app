export interface LocationType {
	latitude: number;
	longitude: number;
	latitudeDelta?: number;
	longitudeDelta?: number;
}

export interface UserType {
	name: string | null;
	email: string | null;
	phone?: string | null;
	token?: string | null;
	avatar?: string | null;
	verified: boolean;
	isLogin: boolean;
}

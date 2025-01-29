export const Authorization = (token: string) => {
	return {
		Authorization: `Bearer ${token}`,
	};
};

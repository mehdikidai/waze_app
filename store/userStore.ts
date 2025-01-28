import { create } from 'zustand';

interface UserState {


	name: string | null;
	email: string | null;
	phone: string | null;
	avatar: string | null;
	token: string | null;
	verified: boolean;



	isLogin: boolean;
	updateName: (newName: string) => void;
	updateEmail: (newEmail: string) => void;
	updatePhone: (newPhone: string) => void;
	updateAvatar: (newAvatar: string) => void;
	updateToken: (newToken: string) => void;
	updateVerified: (newVerified: boolean) => void;
	updateIsLogin: (newState: boolean) => void;
	resetUser: () => void;
}

const DEFAULT_AVATAR =
	'https://cdn.dribbble.com/users/18485059/avatars/normal/5d063fc89d0b88300b41df4e19663925.jpg';

const useUserStore = create<UserState>((set) => ({
	name: 'mehdi kidai',
	email: 'mehdikidai@gmail.com',
	phone: '0605805993',
	avatar: DEFAULT_AVATAR,
	token: null,
	verified: false,
	isLogin: true,

	// Update functions

	updateName: (newName: string) => set({ name: newName }),
	updateEmail: (newEmail: string) => set({ email: newEmail }),
	updatePhone: (newPhone: string) => set({ phone: newPhone }),
	updateAvatar: (newAvatar: string) => set({ avatar: newAvatar }),
	updateToken: (newToken: string) => set({ token: newToken }),
	updateVerified: (newVerified: boolean) => set({ verified: newVerified }),
	updateIsLogin: (newState: boolean) => set({ isLogin: newState }),

	// Reset function
  
	resetUser: () =>
		set({
			name: null,
			email: null,
			phone: null,
			avatar: DEFAULT_AVATAR,
			token: null,
			verified: false,
			isLogin: false,
		}),
}));

export default useUserStore;

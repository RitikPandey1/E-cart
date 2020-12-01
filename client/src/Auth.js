import Cookies from 'js-cookie';
const jwt = Cookies.get('jwt');

export const isAuth = jwt
	? { isLogin: true, token: jwt }
	: { isLogin: false, token: null };
export const logout = () => {
	Cookies.remove('jwt');
};

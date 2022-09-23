import Cookies from 'js-cookie';

const useAuth = () => {
	const data = { auth: {}, sessionData: {} };
	data['auth']['user'] = Cookies.get('token') || '';
	const sesInfo = JSON.parse(localStorage.getItem('sessionInfo'));
	data['auth']['roles'] = sesInfo?.roles || [];
	data['sessionData'] = sesInfo?.json || {};
	return data;
};

export default useAuth;

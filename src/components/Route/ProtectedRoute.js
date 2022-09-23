import React from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth/useAuth';

function ProtectedRoute({ allowedRoles }) {
	const { auth } = useAuth();
	const location = useLocation();

	return auth.user ? (
		auth?.roles.find((i) => allowedRoles.includes(i)) ? (
			<Outlet />
		) : (
			<Navigate to='/unauthorized' state={{ from: location }} replace />
		)
	) : (
		<Navigate to='/login' state={{ from: location }} replace />
	);
}

// function ProtectedRoute({allowedRoles}) {
// const authBool = useAuth();
// 	const location = useLocation();

// 	// we can also send the roles from the backend and set them in cookie in client
// 	// and set the protected routes according to the role, like
// 	// return authBool && allowedRoles.find(i => allRoles.includes(i)) ? <Outlet /> : <Navigate to='/signin' state={{ from: location }} replace />;

// }

export default ProtectedRoute;

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../Home/Home';
import Setting from '../Setting/Setting';
import ProtectedRoute from './ProtectedRoute';
import LayoutWrapper from '../LayoutWrapper/LayoutWrapper';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Unauthorized from '../../common/Unauthorized';
import Landing from '../Landing/Landing';
import Admin from '../Admin/Admin';

function AllRoute() {
	return (
		<>
			<Routes>
				<Route path=''>
					{/* public routes start */}
					<Route path='/' element={<Landing />} />
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
					{/* public routes end */}

					{/* Protected routes start */}
					<Route element={<LayoutWrapper />}>
						<Route path='unauthorized' element={<Unauthorized />} />

						<Route element={<ProtectedRoute allowedRoles={[201]} />}>
							<Route path='home' element={<Home />} />
						</Route>

						<Route element={<ProtectedRoute allowedRoles={[202]} />}>
							<Route path='setting' element={<Setting />} />
						</Route>

						<Route element={<ProtectedRoute allowedRoles={[203]} />}>
							<Route path='admin' element={<Admin />} />
						</Route>
					</Route>
					{/* Protected routes end */}

					{/* catch all routes start */}
					<Route path='*' element={<Navigate to='/home' />} replace />
					{/* catch all routes end */}
				</Route>
			</Routes>
		</>
	);
}

export default AllRoute;

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
function LayoutWrapper() {
	return (
		<div>
			Layout Page ( change roles from localstorage )
			<Header />
			<Outlet />
		</div>
	);
}

export default LayoutWrapper;

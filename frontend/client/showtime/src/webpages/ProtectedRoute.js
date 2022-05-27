import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Cmp, ...rest }) => (
	<Route
		{...rest}
		render={(props) =>
			localStorage.getItem('is_admin') == "true" ? (
				<Cmp {...props} />
			) :
				<Redirect to='/' />
		}
	/>
)

export default ProtectedRoute;
import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.container';
class RouteContainer extends Component {
	render() {
		return (
			<>
				<Navigation />
				<Route exact path="/" />
				<Route path="/test" />
				<Route path="/error" />
			</>
		);
	}
}

export default RouteContainer;
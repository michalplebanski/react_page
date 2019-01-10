import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeRoute from '../HomeRoute/HomeRoute.container';
import Navigation from '../Navigation/Navigation.container';

class MainRoute extends Component {
	render() {
		return (
			<>
				<Navigation />
				<Route exact path="/" component={HomeRoute} />
				<Route path="/error" />
			</>
		);
	}
}

export default MainRoute;
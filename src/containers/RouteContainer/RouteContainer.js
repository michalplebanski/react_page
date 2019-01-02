import React, { Component } from 'react';
import { Route } from 'react-router-dom';

class RouteContainer extends Component {
	render() {
		return (
			<>
				<Route exact path="/" />
				<Route path="/test" />
				<Route path="/error" />
			</>
		);
	}
}

export default RouteContainer;
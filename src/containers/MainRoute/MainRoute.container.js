import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import HomeRoute from '../HomeRoute/HomeRoute.container';
import Navigation from '../Navigation/Navigation.container';
import Footer from '../Footer/Footer.container';

class MainRoute extends Component {
	render() {
		return (
			<>
				<Navigation />
				<Route exact path="/" component={HomeRoute} />
				<Route path="/work"/>
				<Route path="/jobs"/>
				<Route path="/blog"/>
				<Route path="/contact"/>
				<Footer />

			</>
		);
	}
}

export default MainRoute;
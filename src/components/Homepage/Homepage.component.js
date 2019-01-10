import React from 'react';

import Jumbotron from './Jumbotron/Jumbotron.component';
import Services from '../../containers/HomeRoute/Services/Services.container';

import './Homepage.scss';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Jumbotron />
			<Services />
		</div>
	);
}

export default Homepage;
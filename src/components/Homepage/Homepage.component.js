import React from 'react';

import Jumbotron from './Jumbotron/Jumbotron.component';
import Services from './Services/Services.component';

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
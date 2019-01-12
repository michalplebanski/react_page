import React from 'react';

import Jumbotron from './Jumbotron/Jumbotron.component';
import Services from '../../containers/HomeRoute/Services/Services.container';
import Paragraph from '../../containers/HomeRoute/Paragraph/Paragraph.container';

import './Homepage.scss';

const Homepage = () => {
	return (
		<div className='homepage'>
			<Jumbotron />
			<Services />
			<Paragraph />
		</div>
	);
}

export default Homepage;
import React from 'react';

import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Jumbotron.scss';

const Jumbotron = () => {
	return (
		<section className='jumbotron'>
			<div className='jumbotron__content'>
				<h2><span className='blue_color'>B</span>est <span className='blue_color'>T</span>echnology <span className='blue_color'>I</span>nnovations</h2>
			</div>
			<div className='jumbotron__icon'>
				<i className='fa fa-arrow-down'/>
			</div>
		</section>
	);
}

export default Jumbotron;
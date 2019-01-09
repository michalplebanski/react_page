import React from 'react';

import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Services.scss';

const Services = () => {
	return (
		<section className='services'>
			<h2 className='services__header'>What we can do for you?</h2>
			<div className='services__career'>
				<span className='services__icon-container'>
					<i className='services__icon fa fa-desktop' />
					<h3 className='services__icon-content'>Web development</h3>
					<div className='services__example'>
						<p>Front-End Developer</p>
						<p>React Developer</p>
						<p>Node Developer</p>
					</div>
				</span>
				<span className='services__icon-container'>
					<i className='services__icon fa fa-mobile' />
					<h3 className='services__icon-content'>Mobile app</h3>
					<div className='services__example'>
						<p>iOS Developer</p>
						<p>React Native Developer</p>
						<p>Android Developer</p>
					</div>
				</span>
				<span className='services__icon-container'>
					<i className='services__icon fa fa-crop' />
					<h3 className='services__icon-content'>Design</h3>
					<div className='services__example'>
						<p>UX/UI Designer</p>
						<p>Producent Designer</p>
					</div>
				</span>
			</div>
		</section>
	);
}

export default Services;
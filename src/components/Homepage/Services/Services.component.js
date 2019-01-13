import React from 'react';

import '../../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Services.scss';

const ServicesSection = (props) => {
	return (
		<section className='services'>
			<h2 className='services__header'>What we can do for you?</h2>
			<div className='services__career'>
				<div onClick={props.handleClick} className='services__icon-container'>
					<i className='services__icon fa fa-desktop' />
					<h3 className='services__icon-content'>Web development</h3>
					<div className='services__example'>
						{
							props.webDev.map(item => 
								<p key={item.id}>{item.name}</p>
							)
						}
					</div>
				</div>
				<div onClick={props.handleClick} className='services__icon-container'>
					<i className='services__icon fa fa-mobile' />
					<h3 className='services__icon-content'>Mobile app</h3>
					<div className='services__example'>

						{
							props.mobileApp.map(item => 
								<p key={item.id}>{item.name}</p>
							)
						}
					</div>
				</div>
				<div onClick={props.handleClick} className='services__icon-container'>
					<i className='services__icon fa fa-crop' />
					<h3 className='services__icon-content'>Design</h3>
					<div className='services__example'>
						{
							props.designProduct.map(item => 
								<p key={item.id}>{item.name}</p>
							)
						}
					</div>
				</div>
			</div>
		</section>
	);
}

export default ServicesSection;
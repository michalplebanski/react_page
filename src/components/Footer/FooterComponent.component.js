import React from 'react';

import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import './Footer.scss';

const FooterComponent = (props) => {
	return (
		<footer className='footer'>
			<ul className='footer__list footer__info'>
				{
					props.info.map((index) =>
						{
							if (index.src === '') {
								return <li key={index.id}>{index.name}</li>
							} else {
								return <li key={index.id}>
									<a 
										target='_blank'
										href={index.src}
									>
										{index.name}
									</a>
								</li>
							}
						}
					)
				}
			</ul>
			<ul className='footer__list footer__social'>
				{
					props.social.map((index) =>
						<li key={index.id}> 
							<a 
								className={index.class}
								href={index.src}
								target='_blank'
							>
								{index.name}
							</a>
						</li>
					)
				}
			</ul>
		</footer>
	);
}

export default FooterComponent;
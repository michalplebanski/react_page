import React from 'react';

import './ParagraphButton.scss';

const ParagraphButton = (props) => {
	return (
		<section className='paragraph'>
			<h3 className='paragraph__header'>We are one of the largest software house. We provide custom software development services for the whole world. Show us your idea and we will provide you with advanced IT solutions enabling you to achieve your business aims.</h3>
			<button onClick={props.handleClick} className='paragraph__button'>Work</button>
		</section>
	);
}

export default ParagraphButton
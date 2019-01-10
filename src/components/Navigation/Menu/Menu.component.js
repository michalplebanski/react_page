import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

const Menu = (props) => {
	return (
		<li className='menu'>
			<NavLink 
				to={props.src} 
				className='menu__item-hover' 
				activeClassName='menu__item-active'
			>
				{props.name}
			</NavLink>
		</li>
	);
}

export default Menu;
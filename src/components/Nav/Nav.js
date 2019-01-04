import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss'

const Nav = (props) => {
	return (
		<nav className='nav'>
			<p className='nav__logo'>LOGO</p>
			<ul className='nav__list'>
				{props.navItems.map((item) =>
					<li className='nav__item' key={item.key}>
						<NavLink to={item.src} className='nav__item-hover' activeClassName='nav__item-active'>{item.name}</NavLink>
					</li>
				)}
			</ul>
		</nav>
	);
}

export default Nav;
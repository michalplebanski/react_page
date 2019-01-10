import React from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import Menu from './Menu/Menu.component';
import './Navigation.scss'

const Navigation = (props) => {
	return (
		<nav className={ props.isMenu ? 'nav' : 'hide-nav' }>
			<i className="nav__logo fa fa-spinner fa-spin" />
			<ul className='nav__list'>
				{props.navItems.map((item) =>
					<Menu
						key={item.id}
						name={item.name}
						src={item.src}
					/>
				)}
			</ul>
		</nav>
	);
}

export default Navigation;
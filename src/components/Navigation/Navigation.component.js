import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import Menu from './Menu/Menu.component';
import './Navigation.scss'

class Navigation extends Component {
	render() {
		return (
			<nav className='nav'>
				<i className="nav__logo fa fa-spinner fa-spin" />
				<ul className='nav__list'>
					{this.props.navItems.map((item) =>
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
}

export default Navigation;
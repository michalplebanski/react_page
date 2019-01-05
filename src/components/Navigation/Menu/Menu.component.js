import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

class Menu extends Component {
	render() {
		return (
			<li className='menu'>
				<NavLink 
					to={this.props.src} 
					className='menu__item-hover' 
					activeClassName='menu__item-active'
				>
					{this.props.name}
				</NavLink>
			</li>
		);
	}
}

export default Menu;
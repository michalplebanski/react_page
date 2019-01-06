import React, { Component } from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 

import Menu from './Menu/Menu.component';
import './Navigation.scss'

class Navigation extends Component {
	render() {
		const { navItems, isMenu } = this.props;
		return (
			<nav className={ isMenu ? 'nav' : 'hide-nav' }>
				<i className="nav__logo fa fa-spinner fa-spin" />
				<ul className='nav__list'>
					{navItems.map((item) =>
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
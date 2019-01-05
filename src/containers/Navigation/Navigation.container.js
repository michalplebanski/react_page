import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation.component';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigationItems: [
				{
					id: 0,
					name: 'About',
					src: '/about',
				},
				{
					id: 1,
					name: 'Services',
					src: '/services',
				},
				{
					id: 2,
					name: 'Work',
					src: '/work',
				},
				{
					id: 3,
					name: 'Contact',
					src: '/contact',
				},
			]
		}
	}

	render() {
		return (
			<Navigation navItems={this.state.navigationItems} />
		)
	}
};

export default Header;
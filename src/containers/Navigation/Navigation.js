import React, { Component } from 'react';

import Nav from '../../components/Nav/Nav';

class Navigation extends Component {
	constructor(props) {
		super(props);
		this.state = {
			navigationItems: [
				{
					key: 0,
					name: 'About',
					src: '/about',
				},
				{
					key: 1,
					name: 'Services',
					src: '/services',
				},
				{
					key: 2,
					name: 'Work',
					src: '/work',
				},
				{
					key: 3,
					name: 'Contact',
					src: '/contact',
				},
			]
		}
	}

	render() {
		return (
			<Nav navItems={this.state.navigationItems} />
		)
	}
};

export default Navigation;
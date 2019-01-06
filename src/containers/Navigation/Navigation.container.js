import React, { Component } from 'react';

import Navigation from '../../components/Navigation/Navigation.component';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isScrollUp: true,
			lastScrollY: 0,
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
					name: 'Jobs',
					src: '/jobs',
				},
				{
					id: 4,
					name: 'Blog',
					src: '/blog',
				},
				{
					id: 5,
					name: 'Contact',
					src: '/contact',
				},
			]
		}
	}

	componentWillMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {
		const { lastScrollY } = this.state;
		const currentScrollY = window.scrollY;

		if (currentScrollY < lastScrollY ) {
			this.setState({ isScrollUp: true});
		} else {
			this.setState({ isScrollUp: false});
		}
		this.setState({ lastScrollY: currentScrollY});
	}

	render() {
		const { isScrollUp, navigationItems } = this.state;

		return <Navigation 
			navItems={navigationItems}
			isMenu={isScrollUp}
		/>
	}
};

export default Header;
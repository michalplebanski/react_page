import React, { Component } from 'react';

import FooterComponent from '../../components/Footer/FooterComponent.component';

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [
				{
					name: 'Apptension',
					src: '',
					id: '1',
				},
				{
					name: 'Privacy Policy',
					src: 'https://www.google.pl/',
					id: '2',
				}
			],
			social: [
				{
					class: 'fa fa-facebook',
					src: 'https://www.netguru.com/',
					target: '_blank',
					id: '1',
				},
				{
					class: 'fa fa-github',
					src: 'github.com',
					target: '_blank',
					id: '2',
				},
				{
					class: 'fa fa-twitter-square',
					src: 'twitter.com',
					target: '_blank',
					id: '3',
				},
				{
					class: 'fa fa-linkedin',
					src: 'linkedin.com',
					target: '_blank',
					id: '4',
				}
			]
		}
	}

	render() {
		const {info, social } = this.state;

		return (
			<FooterComponent 
				info={info}
				social={social}
			/>
		);
	}
}

export default Footer;
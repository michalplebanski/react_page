import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ServicesSection from '../../../components/Homepage/Services/Services.component';

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			webDevelopment: [
				{
					name: 'Front-End Developer',
					id: 1,
				},
				{
					name: 'React Developer',
					id: 2,
				},
				{
					name: 'Node Developer',
					id: 3,
				},
			],
			mobileApp: [
				{
					name: 'iOS Developer',
					id: 1,
				},
				{
					name: 'React Native Developer',
					id: 2,
				},
				{
					name: 'Android Developer',
					id: 3,
				},
			],
			designProduct: [
				{
					name: 'UX/UI Designer',
					id: 1,
				},
				{
					name: 'Product Designer',
					id: 2,
				},
			],
		}
	}

	handleClick = () => {
		this.props.history.push('/jobs');
	}

	render() {
		const { webDevelopment, mobileApp, designProduct } = this.state;
		return (
			<ServicesSection  
				webDev={webDevelopment} 
				mobileApp={mobileApp}
				designProduct={designProduct}
				handleClick={this.handleClick}
			/>
		);
	}
}

export default withRouter(Services);
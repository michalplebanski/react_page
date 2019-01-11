import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ServicesSection from '../../../components/Homepage/Services/Services.component';

class Services extends Component {
	constructor(props) {
		super(props);
		this.state = {
			webDevelopment: [
				'Front-End Developer',
				'React Developer',
				'Node Developer',
			],
			mobileApp: [
				'iOS Developer',
				'React Native Developer',
				'Android Developer'
			],
			designProduct: [
				'UX/UI Designer',
				'Product Designer'
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
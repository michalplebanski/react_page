import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import ParagraphButton from '../../../components/Homepage/ParagraphButton/ParagraphButton.component';

class Paragraph extends Component {
	handleClick = () => {
		this.props.history.push('/work');
	}

	render() {
		return (
			<ParagraphButton handleClick={this.handleClick}/>
		);
	}
}

export default withRouter(Paragraph);
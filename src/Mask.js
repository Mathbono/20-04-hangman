import React, { Component } from 'react';

class Mask extends Component {
	render() {
		return (
			<input
				type="button"
				value={this.props.letter}
				readOnly
			/>
		);
	}
}

export default Mask;

import React, { Component } from 'react';

class Button extends Component {
	state = {
		tried: false
	};
	input = React.createRef();
	treat = e => {
		if((!this.state.tried) && (this.props.counter < 11)) {
			this.setState({tried: true});
			e.target.classList.add("discovered");
			this.props.verify(e.target.value);
		}
	}
	reinitialize = () => {
		this.setState({tried: false});
		this.input.current.classList.remove("discovered");
	}
	render() {
		return (
			<input
				type="button"
				value={this.props.letter}
				ref={this.input}
				readOnly
				onClick={this.treat}
			/>
		);
	}
}

export default Button;

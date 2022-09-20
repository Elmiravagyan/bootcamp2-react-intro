import { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.initial || 0,
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSub = this.handleSub.bind(this);
	}

	handleAdd() {
		this.setState({
			count: this.state.count + 1,
		})
	}
	
	handleSub() {
		this.setState({
			count: this.state.count - 1,
		})
	}

	render() {
		const { count } = this.state;
		const { title, isFinished, isButtonClickable } = this.props;
		const disabled = !(!isFinished && isButtonClickable); 
		return(
			<div>
				<button disabled={disabled} className={`button ${disabled ? 'disabled' : ''}`} onClick={this.handleAdd}>+</button>
				<h1>{title} Counter {count}</h1>
				<button onClick={this.handleSub}>-</button>
				{isFinished && <span className='message'>Your score is {count}</span>}
			</div>
		)
	}
}

export default Counter;
import { Component } from 'react';

class BasicCounter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: this.props.initial || 0,
		};
		this.handleAdd = this.handleAdd.bind(this);
		this.handleSub = this.handleSub.bind(this);
	}

	static getDerivedStateFromProps(props, state) {
		console.log('Log ::: props,state ::: ', props,state);
		if(props.reset) {
			return {
				count: 0
			}
		}
		return null;
	}

	componentDidMount() {
		console.log('called after first render');
	}

	componentDidUpdate() {
		if(this.props.reset) {
			// this.setState({
			// 	count: 0
			// });
		}
		console.log('called after second render');
	}

	componentWillUnmount() {
		console.log('Log ::: component unmounted :::');
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
		const { isHidden } = this.props;
		return(
			<div className={isHidden ? 'hide' : ''}>
				<button onClick={this.handleAdd}>+</button>
				<h1>{this.props.title} Counter {count}</h1>
				<button onClick={this.handleSub}>-</button>
			</div>
		)
	}
}

export default BasicCounter;
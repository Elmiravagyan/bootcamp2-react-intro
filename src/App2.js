import { Component } from 'react';
import Counter from './components/basicCounter';
import App3 from './App3';
import Greet from './components/functionComponent';

class App2 extends Component {
	constructor() {
		super();
		this.state = {
			reset: false,
			hideCounter1: false,
			hideCounter2: false,
		}
	}

	resetCounters = () => {
		this.setState({ reset: true })
	}

	hideCounter = (counter) => {
		const field = `hideCounter${counter}`;
		this.setState({ [field]: !this.state[field] });
	}

	render() {
		const { state: { hideCounter1, hideCounter2 } } = this;
		return (<>
			{/*Example 1*/}
			{/*<button onClick={this.resetCounters}>Reset Counters</button>*/}
			{/*{!hideCounter1 && <Counter reset={this.state.reset} />}*/}
			{/*<button onClick={() => this.hideCounter('1')}>*/}
			{/*	{!hideCounter1 ? `Hide 1` : 'Show'}*/}
			{/*</button>*/}
			{/*<Counter isHidden={hideCounter2} reset={this.state.reset} />*/}
			{/*<button onClick={() => this.hideCounter('2')}>Hide 2</button>*/}
			{/*<Counter reset={this.state.reset} />*/}
			{/*<button>Hide 3</button>*/}

			{/*//Example 2*/}
			{/*{!hideCounter1 && <App3 reset={this.state.reset} />}*/}
			{/*<button onClick={() => this.hideCounter('1')}>*/}
			{/*	{!hideCounter1 ? `Hide 1` : 'Show'}*/}
			{/*</button>*/}

			{/*//Example 3*/}
			<Greet><div>Hi guys</div></Greet>
		</>)
	}
};

export default App2;
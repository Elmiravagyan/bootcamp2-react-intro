import { Component } from 'react';
import Counter from './components/counter';
import Timer from './components/timer';

class App extends Component {
	constructor() {
		super();
		this.state = {
			isFinished: false,
			isButtonClickable: false,
		};
	}
	
	setIsButtonClickable = () => {
		this.setState({
			isButtonClickable: !this.state.isButtonClickable,
		});
	}
	
	setFinished = () => {
		this.setState({
			isFinished: true,
		})
	}
	
	render() {
		console.log('Log ::: this.state ::: ', this.state);
		const { isFinished, isButtonClickable } = this.state;
		return(
			<div>
				<Timer setFinish={this.setFinished} setIsButtonClickable={this.setIsButtonClickable} />
				<Counter isClickable={isButtonClickable} isFinished={isFinished} title="First" initial={0} />
			</div>
		)
	}
};

export default App;
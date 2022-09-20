import { Component } from 'react';

class Timer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			time: 3,
		}
	}

	hanldeStart = () => {
		this.props.setIsButtonClickable();
		let intervalid = setInterval(
			() => {
				if(this.state.time === 0) {
					clearInterval(intervalid);
					this.props.setFinish();

				} else {
					this.setState({
						time: this.state.time - 1
					})
				}
			}, 1000);
	}
	
	render() {
		const { state: { time }}  = this;
		return(
			<div>
				<button onClick={this.hanldeStart}>Start</button>
				<h1>Time: {time}</h1>
			</div>
		)
	}
}

export default Timer;
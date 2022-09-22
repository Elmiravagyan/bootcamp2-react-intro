import { Component } from 'react';
import Counter from './components/basicCounter';

class App3 extends Component {
	constructor() {
		super();
		this.state = {
			isMobile: true,
		}
	}

	handleResize = () => {
		if(window.innerWidth > 760) {
			console.log('Desktop', window.innerWidth);
			this.setState({
				isMobile: false,
			})
		} else {
			console.log('Mobile', window.innerWidth);
			this.setState({
				isMobile: true,
			})
		}
	}

	componentDidMount() {
		console.log('Log ::: First Render :::');
		window.addEventListener('resize', this.handleResize);
	}

	componentWillUnmount() {
		console.log('Log ::: Element unmounted :::');
		window.removeEventListener('resize', this.handleResize);
	}

	render() {
		return(<>
			{
				this.state.isMobile ?
					<div className="mobile">Mobile</div>
					:
					<div className="desktop">Desktop</div>}
		</>)
	}
};

export default App3;
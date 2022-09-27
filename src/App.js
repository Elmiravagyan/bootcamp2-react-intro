import { Component } from 'react';
import CardList from './components/cardList';
import UserPage from './components/userPage';

class App extends Component {
	constructor() {
		super();
		this.state = {
			currentUserId: null,
		}
	}
	
	setCurrentUserId = (id) => {
		this.setState({ currentUserId: id })
	};
	
	render() {
		const { state: { currentUserId }} = this;
		return(
			<>
				{!currentUserId ?
					<CardList setCurrentUserId={this.setCurrentUserId} />
					:
					<UserPage setCurrentUserId={this.setCurrentUserId} currentUserId={currentUserId}/>
				}
			</>
		)
	}
};

export default App;
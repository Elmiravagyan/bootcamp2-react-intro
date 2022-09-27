import { Component } from 'react';

import { API_URL } from './../../constants/api';

class UserPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {},
		}
	}
	
	componentDidMount() {
		const { props: { currentUserId } } = this;
		fetch(`${API_URL}/${currentUserId}`)
			.then(res => res.json())
			.then(res => this.setState({ user: res }))
	}

	render() {
		console.log('Log ::: this.state ::: ', this.state);
		const { props: { currentUserId }, state: { user: { avatar_url, bio, followers, following }}} = this;
		return(
			<div className='userData'>
				<img className='image' src={avatar_url} alt=""/>
				<span>{bio}</span>
				<div>Followers: {followers}</div>
				<div>Following: {following}</div>
				<button onClick={() => this.props.setCurrentUserId(null)}>Get to the user page</button>
			</div>
		)
	}
};

export default UserPage;
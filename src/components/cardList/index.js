import { Component } from 'react';

import PhotoCard from './../photoCard';

import { API_URL } from '../../constants/api';

class CardList extends Component {
	constructor(props) {
		super(props);
		this.users = [];
		this.state = {
			users: [],
			searchInput: '',
		};
	}

	componentDidMount() {
		fetch(API_URL).then(res => res.json())
			.then(res => {
				this.setState({ users: res });
				this.users = res;
			});
	}

	componentDidUpdate(prevProps, prevState) {
		const { state: { users, searchInput } } = this;
		if(prevState.searchInput !== this.state.searchInput) {
			if(searchInput.length >= 3) {
				this.setState({ users: this.users.filter(user => user.login.includes(searchInput)) })
			} else {
				this.setState({ users: this.users });
			}
		}
	}
	
	handnleInputChange = (e) => {
		this.setState({ searchInput: e.target.value })
	}

	hanldeLike = (e, id) => {
		console.log('Log ::: id ::: ', id);
		e.stopPropagation();
		this.users = this.users.map(item => {
			if (item.id === id) {
				item.isLiked = !item.isLiked;
			}
			return item;
		});
		this.setState({ users: this.users });
	}

	render() {
		const { state: { users, searchInput }, props: { setCurrentUserId } } = this;
		return(
			<div>
				<h1>Users</h1>
				<div className='input'>
					<label htmlFor="searchInput"></label>
					<input onChange={this.handnleInputChange} value={searchInput} type="text" id="searchInput"/>
				</div>
				<div className='container'>
					{users.map(user => <PhotoCard setCurrentUserId={setCurrentUserId} key={user.id} {...user} onLike={this.hanldeLike} />)}
				</div>
			</div>
		)
	}
}

export default CardList;
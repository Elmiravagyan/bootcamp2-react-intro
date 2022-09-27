import { Component } from 'react';
import disLike from './../../assets/heart-regular.svg'
import like from './../../assets/solid.svg'

class PhotoCard extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { avatar_url, login, isLiked, id, setCurrentUserId } = this.props;
		return(
			<div className='photoCard' onClick={() => setCurrentUserId(login)}>
				<img className='image' src={avatar_url} alt=""/>
				<div>{login}</div>
				<img
					className='heartIcon'
					onClick={(e) => this.props.onLike(e, id)}
					src={isLiked ? like : disLike}
					alt="heart"
				/>
			</div>
		)
	}
}

export default PhotoCard;
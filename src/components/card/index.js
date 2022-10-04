import { useState, useEffect } from 'react';
import close from './../../assets/close.svg';

function Card ({ title, editCardCount }){
	const [isVisible, setIsVisible] = useState(true);
	
	useEffect(() => {
		console.log('Log ::: Inside hook ::: ');
		editCardCount(title);
	}, [isVisible]);

	const handleToggle = () => {
		setIsVisible(!isVisible);
	}

	return (
		<div className='wrapper'>
			{isVisible ? <>
				<img
					onClick={handleToggle}
					className='icon'
					alt='close-icon'
					src={close}
				/>
				<div className='card'>
					<div>{title}</div>
				</div>
			</> : <>
				<div className='card'>
					<button onClick={handleToggle}>Show Card</button>
				</div>
			</>}
		</div>
    );
}

export default Card;
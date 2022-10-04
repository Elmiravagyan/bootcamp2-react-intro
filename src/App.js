import { useState, useEffect } from 'react';
import Card from './components/card';
import Bage from './components/bage';
import Wrapper from './Wrapper';

import './App.css';

const cardsDefault = [
	{
		title: 'Card Numer 1',
		renderCount: 0,
		isVisible: true
	},
	{
		title: 'Card Numer 2',
		renderCount: 0,
	},
	{
		title: 'Card Numer 3',
		renderCount: 0,
	},
	{
		title: 'Card Numer 4',
		renderCount: 0,
	},
	{
		title: 'Card Numer 5',
		renderCount: 0,
	},
];

function App (){
	// const [cards, setCards] = useState(cardsDefault);
	//
	// const [showWrapper, setShowWrapper] = useState(true);

	// isVisivle flag change count ex1
	// const editCardCount = (title) => {
	// 	setCards((prev) => {
	// 		return prev.map(item => {
	// 			if (item.title === title) {
	// 				item.renderCount++;
	// 			}
	// 			return item;
	// 		})
	// 	})
	// }


	const [showCard, setShowCard] = useState(cardsDefault);
	const [unmountCount, setUnmountCount] = useState(0);
	
	return (
		//isVisivle flag change count ex1
        // <div className='conatiner'>
		// 	{cards.map(card => <Card
		// 		key={card.title}
		// 		title={card.title}
		// 		editCardCount={editCardCount}
		// 	/>)}
        // </div>

		//Unmount count Ex2
		<div>
			{showCard && <Bage unmountCount={unmountCount} setUnmountCount={setUnmountCount} title="Cool bage"/>}
			<button onClick={() => setShowCard(!showCard)}>{showCard ? 'Hide' : 'Show'}</button>
			<div>Unmount count is {unmountCount}</div>
		</div>

		// Example with wrapper resize Ex.3
		// <div>
		// 	{showWrapper && <Wrapper/>}
		// 	<button onClick={() => setShowWrapper(!showWrapper)}>{showWrapper ? 'Hide' : 'Show'}</button>
		// </div>
    );
}

export default App;
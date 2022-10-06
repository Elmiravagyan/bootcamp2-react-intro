import React, { useState } from 'react';
import Balance from './components/balance';
// import RandomComponent from './components/randomComponent';
// import TodoList from './components/todoList';
// import TodoList from './components/todolistWithReduce';

const warnings = [
	'Եղեք ուշադիր',
	'Լռեք',
	'Լռեք',
	'Եղեք բարեհամբույր',
	'Լռեք',
	'Եղեք բարի',
	'Լռեք',
	'Եղեք խելացի',
	'Լռեք'
];

const usersData = [
	{ name: 'Ani', balance: 10000 },
	{ name: 'Aram', balance: 20000 },
	{ name: 'Hayk', balance: 200 },
	{ name: 'Narek', balance: 34567890 },
	{ name: 'Davit', balance: 120000000 },
	{ name: 'Anna', balance: 3567 },
];

function App (){
	const [users, setUsers] = useState(usersData);
	// const [message, setMessage] = useState('We love bootcamp');
	const [warning, setWarning] = useState('Լռեք');
	//
	const updateWarning = () => {
		setWarning(warnings[Math.floor(Math.random()*10)])
	}

	return (
        <div>
			<h1>{warning}</h1>
			<button onClick={updateWarning}>Change warning</button>
			{/*<RandomComponent message={message} />*/}
			<Balance users={users} />
		</div>
	);
}

export default App;
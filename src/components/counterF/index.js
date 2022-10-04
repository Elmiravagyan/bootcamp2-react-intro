import React, { useState, useEffect } from 'react';

//1. use hooks only inside functional components or custom hooks
//2. Don't use hooks inside conditions i.e. top level
//3. When defining custom hook start nameing with 'use'

function Counter ({ children }){ // const { children } = props // {}
	const [count, setCount] = useState(0);
	const [title, setTitle] = useState(children || 'Basic Counter');

	useEffect(() => { // ==> ComponentDidMount
		console.log("Mounted");
	}, []);

	useEffect(() => { // ==> ComponentDidUpdate without condition
		console.log('Log ::: Render ::: ');
	});

	useEffect(() => {  // Based On dependancie
		console.log('Log ::: Count ::: ');
		if(count === 10) {
			console.log('Log ::: Milestone ::: ');
		}
	}, [count]);

	const handleAdd = () => {
		setCount(count + 1);
	}

    return (
        <div>
			<input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/><br/>
            <button onClick={handleAdd}>+</button>
			<div>Count: {count}</div>
			{count === 10 && <span>Milestone</span>}
            <button>-</button>
        </div>
    );
}

export default Counter;
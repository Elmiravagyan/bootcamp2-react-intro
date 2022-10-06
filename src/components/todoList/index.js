import React, { useState } from 'react'
import Todo from './../todo';


// 1. Add todo
// 2. Edit todo
// 3. Delete todo
// 4. Reset todos
// 5. Check todo

/*
TODO: { title: string, id: string, isDone: boolean }
* */

function TodoList (){
	const [inputValue, setInutValue] = useState('');
	const [todoes, setTodoes] = useState([]);

	const handleInputChange = (e) => {
		setInutValue(e.target.value)
	}

	const addTodo = () => {
		setTodoes(prev => ([...prev, { title: inputValue, id: Math.random(), isDone: false }]));
		setInutValue('');
	}

	const deleteTodo = (id) => {
		setTodoes(prev => prev.filter(todo => todo.id !== id))
	}

	const editTodo = (id, newTitle) => {
		setTodoes(prev => prev.map(todo => {
			if(todo.id === id) {
				todo.title = newTitle;
			}
			return todo;
		}));
	}

	const completeTodo = (id) => {
		setTodoes(prev => prev.map(todo => {
			if(todo.id === id) {
				todo.isDone = !todo.isDone;
			}
			return todo;
		}));
	}

	console.log(todoes, 'todoes');


	return (
        <div className='todoListWrapper'>
			<div className='todoList'>
				<div className='addTodo'>
					<input className='input' value={inputValue} onChange={handleInputChange} type="text"/>
					<button className='addButton' disabled={!inputValue} onClick={addTodo}>Add</button>
				</div>
				<div className='todos'>
					{todoes.map(item =>
						<Todo
							key={item.id}
							editTodo={editTodo}
							deleteTodo={deleteTodo}
							completeTodo={completeTodo}
							{...item}
						/>)}
				</div>
			</div>
        </div>
    );
}

export default TodoList;
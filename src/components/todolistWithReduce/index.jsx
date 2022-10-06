import React, { useReducer } from 'react';
import Todo from './../dummyTodo';
import { reducer, ACTION_TYPES, initialState } from './reducer';


function TodoList (){
	const [state, dispatch] = useReducer(reducer, initialState);

	const onDelete = (e,id) => {
		e.stopPropagation();
		dispatch({ type: ACTION_TYPES.DELETE_TODO, payload: { id } });
	}

	const onDone = (id) => {
		dispatch({ type: ACTION_TYPES.SET_DONE, payload: { id } });
	}

	const onEdit = (e,id = null, title = '') => {
		e.stopPropagation();
		dispatch({ type: ACTION_TYPES.EDIT_TODO, payload: { id, title } });
	}

	const onComplete = (id) => {
		dispatch({ type: ACTION_TYPES.COMPLETE_TODO, payload: { id } });
	}



	return (
        <div>
			<input value={state.input} onChange={(e) => dispatch(
				{
					type: ACTION_TYPES.UPDATE_INPUT,
					payload: { inputValue: e.target.value }
				}
			)} type="text"/>
			<button
				disabled={!state.input.trim()}
				onClick={() => dispatch({ type: ACTION_TYPES.ADD_TODO })}
			>
				Add todo
			</button>
			<div className='todos'>
				{state.todos.map(todo =>
					<Todo
						{...todo}
						key={todo.id}
						onEdit={onEdit}
						onDone={onDone}
						onDelete={onDelete}
						onComplete={onComplete}
						editMode={state.editMode}
					>{todo.title}</Todo>)}
			</div>
        </div>
    );
}

export default TodoList;
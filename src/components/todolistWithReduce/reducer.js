export const initialState = {
	input: '',
	todos: [],
	editMode: {
		todoId: '',
		editedTodo: '',
	}
};

export const ACTION_TYPES = {
	ADD_TODO: 'ADD_TODO', // { type: 'ADD_TODO', payload: { id: '', title } }
	SET_DONE: 'SET_DONE',
	EDIT_TODO: 'EDIT_TODO',
	DELETE_TODO: 'DELETE_TODO',
	COMPLETE_TODO: 'COMPLETE_TODO',
	UPDATE_INPUT: 'UPDATE_INPUT',
};

export const reducer = (state, action) => {
	console.log('Log ::: state,action ::: ',action);
	switch (action.type) {
		case ACTION_TYPES.ADD_TODO: {
			return {...state, input: '', todos: [...state.todos,
					{ id: Math.random(), title: state.input, isDone: false }
				]};
		}
		case ACTION_TYPES.UPDATE_INPUT: {
			return {...state, input: action.payload.inputValue}
		}
		case ACTION_TYPES.DELETE_TODO: {
			const { payload: { id } } = action;
			return {...state, todos: state.todos.filter(todo => todo.id !== id)}
		}
		case ACTION_TYPES.COMPLETE_TODO: {
			const { payload: { id } } = action;
			return {
				...state,
				editMode: {
					id: null,
					editedTodo: '',
				},
				todos: state.todos.map(todo => {
					if(todo.id === id) {
						todo.title = state.editMode.editedTodo;
					}
					return todo;
				})}
		}
		case ACTION_TYPES.EDIT_TODO: {
			const { payload: { id, title } } = action;
			return {...state, editMode: { todoId: id, editedTodo: title } }
		}
		case ACTION_TYPES.SET_DONE: {
			const { payload: { id } } = action;
			return {...state, todos: state.todos.map(todo => {
					if(todo.id === id) {
						todo.isDone = !todo.isDone;
					}
					return todo;
				})}
		}
		default: return state;

	}
};
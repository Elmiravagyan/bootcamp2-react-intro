import React, { useState } from 'react';
import edit from './../../assets/edit.svg';
import deleteIcon from './../../assets/delete.svg';

function Todo ({ title, id, isDone, completeTodo, deleteTodo, editTodo }){
    const [isEditMode, setIsEditMode] = useState(false);
    const [editedTodo, setEditedTodo] = useState(title);

    const [editMode, setEditMode] = useState({
        isEditMode: false,
        editedTodo: title,
    });

    const completeEdit = (e) => {
        e.stopPropagation();
        editTodo(id, editedTodo);
        resetEdit(e);
    }

    const resetEdit = (e) => {
        e.stopPropagation();
        setEditedTodo(title);
        setIsEditMode(false)
    }

    const handleEditClick = () => {
        setIsEditMode(true);
    }

    return (
        <div onClick={() => completeTodo(id)} className={`todo ${isDone ? 'done' : ''}`}>
            {isEditMode ?
                <div>
                    <input value={editedTodo} onChange={e => setEditedTodo(e.target.value)} type="text"/>
                    <button onClick={completeEdit}>V</button>
                    <button onClick={resetEdit}>X</button>
                </div> :
                <div>
                    {title}
                    <img onClick={handleEditClick} className='icon' src={edit} alt=""/>
                </div>
            }
            <img onClick={() => deleteTodo(id)} className='icon' src={deleteIcon} alt=""/>
        </div>
    );
}

export default Todo;
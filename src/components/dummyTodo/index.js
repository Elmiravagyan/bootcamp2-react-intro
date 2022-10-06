import React from 'react';

function Todo ({  
   id,
   title,
   onDone,
   onEdit,
   isDone,
   editMode,
   children,
   onDelete,
   onComplete
}){
    return (
        <div className={isDone ? 'done' : ''} onClick={() => onDone(id)}>
            {id === editMode.todoId ?
            <div>
                <input onChange={(e) => onEdit(e,id, e.target.value)} value={editMode.editedTodo} type="text"/>
                <button onClick={() => onComplete(id)}>V</button>
                <button onClick={onEdit}>X</button>
            </div>
                : 
            <div>
                {children}
                <button onClick={(e) => onEdit(e,id, title)}>Edit</button>
                <button onClick={(e) => onDelete(e,id)}>Delete</button>
            </div>
            }
        </div>
    );
}

export default Todo;
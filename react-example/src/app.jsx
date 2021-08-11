import React, { Fragment, useState, useRef} from 'react';
import { TodoList } from './components/TodoList';


export function App(){
    const [todos, setTodos]= useState([
        {id: 1, task: 'Tarea 1', compled: false},
    ]);

    const todoTaskRef = useRef();

    const handleTodoAdd =()=>{
        const task = todoTaskRef.current.value;
        if(task === '') return ;

        /*setTodos((prevTodos) => {
            return [...prevTodos, {id, task, compled: false}]
        })*/
    }

    return (
    <Fragment>
        <TodoList todos={todos}/>
        <input ref={todoTaskRef} type='text' placeholder= 'Nueva Tarea'/>
        <button onClick={handleTodoAdd}>➕</button>
        <button>🗑</button>
    </Fragment>
    );
}
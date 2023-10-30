import React, { CSSProperties } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useState, useEffect } from 'react';

type todo = {
    id: number;
    task: string;
};

function Todo() {
    const [todos, setTodos] = useState<todo[]>([]);
    const [task, setTask] = useState<string>("");

    useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTask(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        if (task.trim().length === 0) {
            alert("Please enter a value!");
            return;
        }

        const todo: todo = {
            id: Date.now(),
            task: task
        };

        setTodos([todo, ...todos]);

        setTask("");
    };

    const handleDelete = (id: number) => {
        const index = todos.findIndex((todo) => todo.id === id);

        todos.splice(index, 1);

        setTodos([...todos]);
    };

   

    return (
        <div className='tab' style={styles}>
            <h1 style={{ color: 'black' }}>Ajouter une tâche</h1>
            <form onSubmit={handleFormSubmit}>
                <input style={{marginRight: '25px', borderRadius: '10px', padding: '8px'}} type="text" name="task" value={task} onChange={handleInput} />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li style={{marginLeft: '45px', padding: '15px'}} key={todo.id}>
                        {todo.task}
                        <button style={{marginLeft: '60px', borderRadius: '10px'}} onClick={() => handleDelete(todo.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

const styles: CSSProperties = {
    border: '1px solid rgba(0, 0, 0, 0.5)', 
    padding : '20px',
    borderRadius : '25px',
    backgroundColor: '#ECABFF',
    display: 'flex',
    textAlign : 'center',
    flexDirection: 'column'
};

export default Todo;
import React, { useState, useEffect } from 'react';
import './ToDoList.scss';

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []); // Empty dependency array to run only on mount

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]); // Save tasks whenever tasks change

    function addTask() {
        if (newTask !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask('');
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function updateTask(index, updatedTask) {
        const updatedTasks = [...tasks];
        updatedTasks[index] = updatedTask;
        setTasks(updatedTasks);
    }

    return (
        <div className='todo-list'>
            <h1>ToDoList</h1>
            <div className='todo-input'>
                <input
                    type='text'
                    placeholder='Enter new task'
                    value={newTask}
                    onChange={(event) => setNewTask(event.target.value)}
                />
                <button className='todo-input__btn' onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index} className='todo-item'>
                        <span>{task}</span>
                        <button className='todo-button' onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='todo-button' onClick={() => updateTask(index)}>
                            Update
                        </button>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default ToDoList;

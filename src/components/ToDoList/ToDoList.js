import react, {useState} from 'react'
import './ToDoList.scss'


function ToDoList(){
    const [tasks,setTasks] = useState([])
    const [newTask,setNewTask] = useState('')

    function handleInputChange(event){
        // event.preventDefault();
        setNewTask(event.target.value)
    }
    
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(task => [...task, newTask])
            setNewTask('')
        }
    }

    function deleteTask(index){
        const updatedTasks =tasks.filter((_,i)=> i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){}

    
    return(
        <div className='todo-list'>
            <h1>ToDoList</h1>
            <div className='todo-input'>
                <input
                    type='text'
                    placeholder='Enter new task'
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className='todo-button' onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ul>
                {tasks.map((task,index)=>
                <li key={index} className='todo-item'>
                    <span>{task}</span>
                    <button className='todo-button' onClick={()=> deleteTask(index)}>
                        Delete
                    </button>
                    <button className='todo-button' onClick={()=> moveTaskUp(index)}>
                        Update
                    </button>
                
                </li>)}
            </ul>
        </div>
    )
}
export default ToDoList;
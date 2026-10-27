import { useState } from "react"
import Tasklist from "./Tasklist"

function Todolist  () {
    const [tasks, setTasks] = useState([]);//hold the task list
    const [text, setText] = useState("");//hold whats the user type

    const addTask = () => { 
        if (text.trim() !== "") {
            setTasks([...tasks, { id: Date.now(), text: text.trim(), done: false }]); // add new task
            setText("");
            }
        };
    const toggleTask = (id) => {
        setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));//toggle the done button
        };
    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));//delete task button
        };

    const clearAll = () => {//clear all done and not done task
        setTasks([]);
        setText("");
        };

    const notDoneTasks = tasks.filter((t) => !t.done);
    const doneTasks = tasks.filter((t) => t.done);


  return (
    <div className='bg-white rounded-xl w-full max-w-3xl mx-auto shadow-lg p-4 sm:p-6'>
        <h1 className='sm:text-2xl text-center font-bold'><span className="mr-2">📝</span>To-Do-List</h1>
        <p className='text-center text-sm italic'>Laboratory 3 with router</p>

        <div className="flex gap-2 mb-4"> 
            <input className="flex-1 min-w-0 border border-gray-400 rounded px-3 py-2" type="text" value={text} onChange={(e) => setText(e.target.value)} 
                onKeyDown={(e) => e.key === "Enter" && addTask()} placeholder="Add a task..."/>
                <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={addTask}>Add Task</button>
        </div>

        <div className="p-3 sm:p-4 mb-4">
            <h2 className="font-bold text-lg mb-2">Not Done ({notDoneTasks.length})</h2>
                {notDoneTasks.length === 0 ? ( 
                    <p className="text-gray-500 italic">No tasks to do.</p>) : (
                    <ul className="space-y-2 max-h-44 overflow-y-auto pr-1"> {notDoneTasks.map((task) => (
                    <Tasklist key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                      ))}
                    </ul>
                )}
        </div>

        <div className="p-3 sm:p-4">
            <h2 className="font-bold text-lg mb-2">Done ({doneTasks.length})</h2>
                {doneTasks.length === 0 ? (
                    <p className="text-gray-500 italic">No completed tasks.</p> ) : (
                    <ul className="space-y-2 max-h-44 overflow-y-auto pr-1"> {doneTasks.map((task) => (
                    <Tasklist key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
                        ))}
                    </ul>
                )}
        </div>
        {tasks.length > 0 && (
                <div className="flex justify-center mt-4">
                    <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer" onClick={clearAll}>Clear All</button>
                </div>
            )}
    </div>
    
  )
}

export default  Todolist
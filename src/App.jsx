import { useState, useEffect } from 'react'
import { Routes, Route, Navigate,  } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Groups from './pages/Groups'
import GroupTask from './pages/GroupTask'
import Userguide from './pages/userguide'
import About from './pages/About'

function App() {
    const [groups, setGroups] = useState(()=>{
        const saved = localStorage.getItem("groups");//saving groups to localstorage
        return saved ? JSON.parse(saved) : []
    })
    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('group-tasks')
        return saved ? JSON.parse(saved) : []
    })

    useEffect(()=>{
        localStorage.setItem('groups', JSON.stringify(groups))
    },[groups])
    
    useEffect(()=>{
        localStorage.setItem('group-tasks', JSON.stringify(tasks))
    },[tasks])

    const addGroup = (name) =>
        setGroups((prev) => [...prev, { id: Date.now().toString(), name }])

    const deleteGroup = (id) => {
        setGroups((prev) => prev.filter((g) => g.id !== id))
        setTasks((prev) => prev.filter((t) => t.groupId !== id))
    }
    const addTask = (title, groupId = null) =>
        setTasks((prev) => [...prev, { id: Date.now().toString(), title, done: false, groupId }])

    const toggleTask = (id) =>
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)))

    const deleteTask = (id) =>
        setTasks((prev) => prev.filter((t) => t.id !== id))

    
    const taskActions = { tasks, addTask, toggleTask, deleteTask  }

    return (
        <div className="min-h-screen p-3 sm:p-6 bg-linear-to-br from-slate-600 to-slate-950">
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<Home groups={groups}{...taskActions} />} />
                <Route path="/groups" element={<Groups groups={groups} addGroup={addGroup} deleteGroup={deleteGroup} />} />
                <Route path="/groups/:groupId" element={<GroupTask groups={groups} {...taskActions} />} />
                <Route path="/userguide" element={<Userguide />} />
                <Route path="/about" element={<About />} />
            </Routes>   
        </div>
    )
}

export default App
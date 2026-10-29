import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'

function GroupTask({ groups, tasks, addTask, toggleTask, deleteTask }) {
    const { groupId } = useParams()
    const [title, setTitle] = useState('')

    const group = groups.find((g) => g.id === groupId)

    if (!group) {
        return (
            <p className="text-white text-center">
                Group not found.{' '}
                <Link to="/groups" className="underline">Back to groups</Link>
            </p>
        )
    }

    const groupTasks = tasks.filter((t) => t.groupId === groupId)

    const handleAdd = () => {
        if (!title.trim()) return
        addTask(title.trim(), groupId)
        setTitle('')
    }

    return (
        <div className="w-full max-w-2xl mx-auto">
            <Link to="/groups" className=" text-white">← Back to groups</Link>
            <h1 className="text-2xl font-bold my-3 text-white!">{group.name}</h1>

            <div className="flex gap-2 mb-4">
                <input value={title} onChange={(e) => setTitle(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleAdd()} placeholder="Add a task..."
                    className="flex-1 px-3 py-2 rounded-lg bg-white text-black"/>
                <button onClick={handleAdd} className="px-4 py-2 rounded-lg bg-blue-500 text-white">
                    Add Task
                </button>
            </div>

            {groupTasks.length === 0 && (
                <p className="text-slate-300 text-center">No tasks in this group yet.</p>
            )}

            <ul className="space-y-2">
                {groupTasks.map((t) => (
                    <li key={t.id} className="bg-white/10 rounded-xl p-3 flex justify-between items-center">
                        <span className={t.done ? 'line-through text-slate-400' : 'text-white'}>
                            {t.title} <small>({t.done ? 'Done' : 'Not Done'})</small>
                        </span>
                        <span className="flex gap-2">
                            <button onClick={() => toggleTask(t.id)} className="px-3 py-1 rounded-lg bg-green-600 text-white">
                                {t.done ? 'Undo' : 'Done'}
                            </button>
                            <button onClick={() => { if (window.confirm("Delete this task?")) deleteTask(t.id)}} className="px-3 py-1 rounded-lg bg-red-600 text-white">
                                Delete
                            </button>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default GroupTask
  function Tasklist({ task, onToggle, onDelete }) {
    return (
      <li className="flex flex-wrap justify-between items-center gap-2 bg-white border border-gray-400 rounded px-3 py-1">
        <span className={`break-words min-w-0 ${task.done ? "line-through text-gray-400" : ""}`}>
          {task.text}
        </span>
        <div className="flex gap-2">

          <button className={`${task.done ? "bg-yellow-500" : "bg-green-500"} text-white px-2 py-1 rounded`} onClick={() => onToggle(task.id)}>
            {task.done ? "Undo" : "Done"}
          </button>

          <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </li>
    );
  }

  export default Tasklist;
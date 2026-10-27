function Userguide() {
    const steps = [
        <>✏️ Type your task and click <b>Add</b> (or press Enter).</>,
        <>📖 New tasks appear in the <b>Not Done</b> box.</>,
        <>✅ Click <b>Done</b> to move a task to the <b>Done</b> box.</>,
        <>↩️ Click <b>Undo</b> to move it back to Not Done.</>,
        <>🗑️ Click <b>Delete</b> to remove a task.</>,
        <>🔄 Click <b>Clear All</b> to reset everything.</>,
    ];

    return (
        <div className="bg-zinc-600 w-full max-w-lg mx-auto rounded-xl shadow p-4 sm:p-6">
            <h2 className="sm:text-2xl text-xl font-bold mb-4 text-center text-white"><span className="mr-2">📘</span>User Guide</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-4">
                {steps.map((step, i) => (
                    <li key={i} className="bg-zinc-700 rounded-lg shadow p-4 text-white flex gap-3 items-start">
                        <span className="font-bold">{i + 1}.</span>
                        <span>{step}</span>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default Userguide
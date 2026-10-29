import Todolist from '../components/Todolist'

function Home(props) {
    return (
        <div className="w-full max-w-6xl mx-auto gap-4 md:gap-6 items-start">
             <h1 className="text-3xl font-bold mb-2 text-center text-white">Welcome to the To-Do App! 👋</h1>
             <p className="text-slate-300 italic max-w-xl mx-auto text-center mb-5">
                Plan your day, organize tasks into groups, 
                and track your progress, all in one place. 
                Add a task below to get started.
             </p>
            <div className="w-full md:flex-1 *:w-full">
                <Todolist {...props} />
            </div>
            
        </div>
    )
}

export default Home
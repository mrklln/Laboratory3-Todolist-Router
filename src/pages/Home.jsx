import Todolist from '../components/Todolist'
import Userguide from '../components/userguide'

function Home() {
    return (
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-start">
            <div className="w-full md:flex-1 [&>*]:w-full">
                <Todolist />
            </div>
            <div className="w-full md:w-80 lg:w-96 [&>*]:w-full">
                <Userguide />
            </div>
        </div>
    )
}

export default Home
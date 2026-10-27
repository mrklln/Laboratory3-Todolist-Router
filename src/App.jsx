import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'

function App() {
    return (
        <div className="min-h-screen p-3 sm:p-6 bg-linear-to-br from-slate-600 to-slate-950">
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    )
}

export default App

import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage'
import DayCardpage from './Pages/DayCardpage'
import CustomMealPage from './Pages/CustomMealPage'
import UserPage from './Pages/UserPage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/day/:date' element={<DayCardpage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/custom-meal' element={<CustomMealPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App

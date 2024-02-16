
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage'
import DayCardPage from './Pages/DayCardPage'
import CustomMealPage from './Pages/CustomMealPage'
import UserPage from './Pages/UserPage'



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/day/:date' element={<DayCardPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/custom-meal' element={<CustomMealPage />} />
        <Route path='/user' element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App

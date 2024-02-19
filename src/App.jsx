
import './App.css'
import { Routes, Route } from 'react-router-dom'
import DashboardPage from './Pages/DashboardPage'
import AboutPage from './Pages/AboutPage'
import DayCardPage from './Pages/DayCardPage'
import CustomMealPage from './Pages/CustomMealPage'
import UserPage from './Pages/UserPage'
import Footer from './Components/Footer'
import Header from './Components/Header'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Info from './Pages/Info'


function App() {

  const [title, setTitle] = useState("");
  const location = useLocation()

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setTitle("AppName");
        break;
      /* case '/day/:date':
        setTitleApp("Today's calories count");
        break; */
      case '/about':
        setTitle("About us");
        break;
      case '/custom-meal':
        setTitle("Your new meals");
        break;
      case '/user':
        setTitle("your profile");
        break;
    }
  }, [location.pathname]);



  return (
    <>
      <Header title={title}/>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/day/:date' element={<DayCardPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/custom-meal' element={<CustomMealPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/info' element={<Info />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App


import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Route path= '/' element= {<DashboardPage/>}/>
<Route path= '/day/:date' element= {<DayCardpage/>}/>
<Route path= '/about' element= {<AboutPage/>}/>
<Route path= '/custom-meal' element= {<CustomMealPage/>}/>
<Route path= '/user' element= {<UserPage/>}/>

    </>
  )
}

export default App

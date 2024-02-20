import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar.jsx';
import Calendar from '../Components/Calendar'; 


function DashboardPage() {

    const navigate = useNavigate()

    return (
        <div >
            <ProgressBar/>
            <input className='calendarInput' onChange={(e) => navigate(`/day/:${e.target.value}`)} type="date" />
            <Calendar />
        </div>

    )
}

export default DashboardPage;
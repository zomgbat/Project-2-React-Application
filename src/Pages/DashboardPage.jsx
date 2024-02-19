import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';
import Calendar from '../Pages/BigCalendar'; // Adjust the import path as necessary


function DashboardPage() {

    const navigate = useNavigate()

    return (
        <div >
            <input className='calendar' onChange={(e) => navigate(`/day/:${e.target.value}`)} type="date" />
            <Calendar />
        </div>

    )
}

export default DashboardPage;
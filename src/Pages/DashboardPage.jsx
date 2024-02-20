import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';
import ProgressBar from '../Components/ProgressBar.jsx';


function DashboardPage() {

    const navigate = useNavigate()

    return (
        <div >
            <ProgressBar/>
            <input className='calendar' onChange={(e) => navigate(`/day/:${e.target.value}`)} type="date" />
        </div>

    )
}

export default DashboardPage;
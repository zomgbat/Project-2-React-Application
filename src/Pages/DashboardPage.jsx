import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';


function DashboardPage() {

    const navigate = useNavigate()

    return (
        <div >
            <input className='calendar' onChange={(e) => navigate(`/day/:${e.target.value}`)} type="date" />
        </div>

    )
}

export default DashboardPage;
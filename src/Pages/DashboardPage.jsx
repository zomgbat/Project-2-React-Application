import '../styles/DashboardPage.css'
import { useNavigate } from 'react-router-dom';


function DashboardPage() {

    const navigate = useNavigate()

    return (
        <>
            <input onChange={(e) => navigate(`/day/:${e.target.value}`)} type="date" />
        </>

    )
}

export default DashboardPage;
import {Link} from "react-router-dom";
import userFetch from '../hooks/userFetch'

export default function DayList(){
    const days = userFetch('http://localhost:3001/days');
    if(days.length === 0){
        return <span>Loading...</span>
    }
    return (
        <ul className="list_day">
            {
                days.map(day => (
                    <li key={day.id}><Link to={`/day/${day.id}`}>Day {day.day}</Link></li>
                ))
            }
        </ul>
    )
}
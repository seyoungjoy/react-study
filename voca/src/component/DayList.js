import {Link} from "react-router-dom";
import userFetch from '../hooks/userFetch'

export default function DayList(){
    const days = userFetch('http://localhost:3001/days');
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
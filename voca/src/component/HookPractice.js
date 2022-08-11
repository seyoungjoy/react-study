import {Link} from "react-router-dom";

export default function HookPractice(){
    return(
        <ul className="list_day">
            <li>
                <Link to="/hook-practice/use-state">
                    <button>useState</button>
                </Link>
            </li>
            <li>
                <Link to="/hook-practice/use-effect">
                    <button>useEffect</button>
                </Link>
            </li>
            <li>
                <Link to="/hook-practice/use-effect-clean">
                    <button>useEffect_clean</button>
                </Link>
            </li>

        </ul>
    )
}
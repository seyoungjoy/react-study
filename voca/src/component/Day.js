import {useParams} from "react-router-dom";
import Word from "./Word";
import userFetch from "../hooks/userFetch"

export default function Day(){
    const {day} = useParams();
    const words = userFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>day - {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                {words.map(word => (
                    <Word word={word} key={word.id}></Word>
                ))}
                </tbody>
            </table>
        </>
    )
}
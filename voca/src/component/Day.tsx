import {useParams} from "react-router-dom";
import Word, {IWord} from "./Word.tsx";
import userFetch from "../hooks/userFetch.ts"

export default function Day(){
    const {day} = useParams<{day:string}>();
    const words: IWord[] = userFetch(`http://localhost:3001/words?day=${day}`)

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
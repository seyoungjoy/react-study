import {useEffect, useState} from "react";
import Timer from './Timer'
export default function UseEffect_clean(){
    const [showTimer, setShowTimer] = useState(false)
    return(
        <>
            {showTimer && <Timer/>}
            <button onClick={() => setShowTimer(!showTimer)}>Toggle</button>

        </>

    )
}
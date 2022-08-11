import {useState} from "react";


export default function UseState(){
    const [time, setTime] = useState(1)
    const handleClick = () => {
        let newTime;
        if(time >= 12){
            newTime = 1;
        } else{
            newTime = time + 1;
        }
        setTime(newTime)
    }
    return(
        <>
            <h1>useState</h1>
            <div>
                <div>현재 시각 : {time}시</div>
                <button onClick={handleClick}>Update</button>
            </div>
        </>

    )
}
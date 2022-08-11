import {useEffect, useState} from "react";

export default function UseState(){
    const [count, setCount] = useState(1);
    const [name, setName] = useState('');
    const handleCountUpdate = () => {
        setCount(count+1);
    }
    const handleInputUpdate = (e) => {
        setName(e.target.value);
    }

    return(
        <>
            <h1>useEffect</h1>
            <div>
                <button onClick={handleCountUpdate}>Update</button>
                <span>count: {count}</span>
            </div>
            <div>
                <input type="text" value={name} onChange={handleInputUpdate}/>
                <div>이름 : {name}</div>
            </div>
        </>

    )
}
import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);

    const Increase = () =>{
        setNumber(setTest);
    }
    const setTest = () => {
        return num + 2;
    }
    const decrease = () =>{
        setNumber(num - 1)
    }

    const test = () => {
        alert(1);
    }

    return (
        <div>
            <button onClick={Increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
            <button onClick={test}>test</button>
        </div>
    )
}
export default Counter;
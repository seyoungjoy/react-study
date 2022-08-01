import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);
    // const num = 0;

    const Increase = () =>{
        setNumber(num + 1)
        // num = num + 1;
    }

    const decrease = () =>{
        setNumber(num - 1)
    }

    return (
        <div>
            <button onClick={Increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <p>{num}</p>
        </div>
    )
}
export default Counter;
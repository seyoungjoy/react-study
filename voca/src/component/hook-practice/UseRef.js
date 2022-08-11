import {useRef, useState} from "react";
export default function UseRef(){
    /*
    ## useRef
    - 특정 DOM을 선택해야할 때 사용.
    - 값이 바뀔 때 리렌더링이 되지 않는다.
    - javascript에서 getElementById, querySelector의 역할

    */
    const [text, setText] = useState('');
    const nameInput = useRef();

    const onChange = e => {
        setText(e.target.value)
    }
    const onReset = () => {
        setText('');
        nameInput.current.focus();
    }

    return(
        <div>
            <input
                name="name"
                onChange={onChange}
                value={text}
                ref={nameInput}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>내용 :</b>
                {text}
            </div>
        </div>
    )
}



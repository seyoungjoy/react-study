import React, {useState} from 'react';

const Input2 = () => {
    // input 초기값 세팅
    const [inputs, setInputs] = useState({
        name:"",
        email:"",
        tel:""
    });
    const {name, email, tel} = inputs;

    const onChange = (e) => {
        const value = e.target.value;
        const id = e.target.id;
        setInputs({
            // 깊은 복사
            ...inputs,
            // name:"",
            // email:"",
            // tel:""
            // 각각의 input이 바뀔 때마다 해당 id의 값을 들고와
            // value를 업데이트 시킨다.
            [id]:value
        })
    }

    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id="name" value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id="email" value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id="tel" value={tel} onChange={onChange}/>
            </div>
            <p>이름 : {name}</p>
            <p>이메일 : {email}</p>
            <p>전화번호 : {tel}</p>
        </div>
    )
}
export default Input2;
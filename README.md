# 한시간 만에 끝내는 React.js 입문 강의 정리

## react 프로젝트 생성
```
npm init react-app [프로젝트 이름]
```

## jsx
- Javascript XML
- react에서 사용하는 javascript 확장 문법
- js에서 html을 동시에 작성 가능.
- XML(Extensible Markup Language) : data를 전달하는 데 포커스는 맞춘 HTML 확장성 버전

## Virtual DOM
- DOM : HTML element 들을 트리 구조로 내타낸 것.
- virtual DOM : 가상돔 객체를 만들어 dom 업데이트를 효율적으로 할 수 있게 만들어줌.
- 리액트는 항상 두 개의 가상돔을 가지고 있으며 변경 전, 변경 이후의 가상돔을 가진다.
- Diffing : 두 개의 가상돔을 비교하며 바뀐 부분 확인
- 바뀐 가상돔의 부분을 Batch Update를 통해 실제 DOM에 한번에 업데이트
- 이러한 과정을 Reconsiliation(재조정)이라 함.

## 함수형 컴포넌트, class형 두가지로 사용가능
- 함수형 컴포넌트 사용 추천(화살표 함수)
```jsx
// 함수형
import React from "react";

function Home(){
    return <h1>Home 화면입니다.</h1>;
}

export default Home;

//class형
import React, {Compoenet} from "react";

class Home extends Compoenet {
    render(){
        return <h1> Home 화면 입니다. </h1>    }
}
export default Home;
```

## 라우팅
- url에 특정 컴포넌트를 맵핑시켜 렌더링시켜줌.
- 리액트에서는 보통 `react-router-dom`사용.
1. `react-router-dom` 설치
```
npm install react-router-dom@6
```

2. index.js 설정
```jsx
import {BrowserRouter} from 'react-router-dom';

<React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
</React.StrictMode>
```

3. App.js 설정
```jsx
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route, Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <nav>
            <Link to="/">Home</Link> | <Link to="/about"> About</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
    </div>
  );
}

export default App;

```

## useState
- 동적으로 상태를 관리할 때 사용하는 훅
```
const [state, setState] = useState([]);
// state 자리는 는 초기 상태값으로 useState() 이 안에 설정
// setState는 상태를 업데이트 할때 사용되는 함수.
```

```jsx
// 1. react에서 useState import
import React, {useState} from 'react';

const Counter = () => {
    // 2. num의 초기값이 useStaet 내부에 들어가고
    // 3. 뒤에 있는 setNumber가 setter 함수가 됨.
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
            {/* 3. 함수를 사용할 때는 중괄호 안에*/}
            <button onClick={Increase}>+1</button>
            <button onClick={decrease}>-1</button>
            {/* 
            4. setNumber setter 함수에 따라 동적으로 바뀌는
            num 의 상태를 확인할 수 있음.
            */}
            <p>{num}</p>
        </div>
    )
}
export default Counter;
```

- input example
```jsx
import React, {useState} from 'react';

const Input = () => {
    const [txtValue, setTextValue] = useState("");

    const onChange = (e) => {
        setTextValue(e.target.value);
    }

    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange}/>
            <br/>
            <p>{txtValue}</p>
        </div>
    )
}
export default Input;

```

- 다중 state 관리 useState example
```jsx
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
```

- 다중 데이터 관리
```jsx
import React from "react";
const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>

    )
}

const UserList = () => {
    const users = [
        {email : 'user1@gmail.com', name:'유재석'},
        {email : 'user2@gmail.com', name:'김종국'},
        {email : 'user3@gmail.com', name:'하하'},
        {email : 'user4@gmail.com', name:'송지효'},
    ]

    return(
        <table>
            <thead>
            <tr>
                <th>이름</th>
                <th>이메일</th>
            </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user}/>)}
            </tbody>
        </table>
    )
}

export default UserList;
```
## Reference
- (vue, react 비교)[https://ryuhojin.tistory.com/16]

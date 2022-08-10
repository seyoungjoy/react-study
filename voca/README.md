## Module css
- css 전역으로 지정 -> `App.css`, `index.css`
- css 모듈화 -> `[component name].module.css`

```jsx
 // Hello.js
import styles from "./Hello.module.css";

export default function Hello(){
    return(
        <div>
            <h1 className={styles.title}>
                Hello
            </h1>
        </div>
    )
}

// Hello.module.css
.title{
    background-color:#eee;
}

```

## 이벤트 처리

```jsx
export default function Hello(){
    const showName = () => {
        console.log('seyoung')
    };
    return(
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>Show name</button>
        </div>
    )
}
```
## `useState`
```jsx
import {useState} from "react";

export default function Hello(){
    const [name, setName] = useState('Mike')

    // (1) if else 문
    // const changeName = () => {
    //    if(name === 'Mike'){
    //        setName('Jane')
    //    } else{
    //        setName('Mike');
    //    }
    // }

    // (2) 함수로 값 반환
    // const changeName = () => name === 'Mike' ? 'Jane' : 'Mike';
    // const settingName = () => setName(changeName);

    // (3) 강의에서 나온 방식
    const changeName = () => {
        setName(name === 'Mike' ? 'Jane' : 'Mike')
    }

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>이름 바꾸기</button>
        </div>
    )
}
```


## 만약 `useState` 없이 state 값을 관리하려면?
- 변수값이 변해도 DOM 없데이트를 해주지 않기 때문에 화면에서의 값은 변하지 않는다.
- 그래서 `useState`를 사용해 데이터가 변했을때 다시 렌더링 되도록 해줘야 하는듯?
```jsx
export default function Hello(){
    let name = 'Mike';
    const changeName = () => {
        name = name === 'Mike' ? 'Jane' : 'Mike';
        console.log(name)
        // 콘솔로 확인하면 changeName 함수가 잘 작동하나 DOM 업데이트를 따로 해줘야한다.
        document.getElementById('name').innerText = name;
    }

    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <button onClick={changeName}>이름 바꾸기</button>

        </div>
    )
}

```

## props
- 하위 컴포넌트로 값을 넘겨줄 때 아래와 같이 사용할 수 있다.
```jsx
import Hello from './component/Hello';

function App() {
  return (
    <div className="App">
        <Hello age={10}></Hello>
        <Hello age={20}></Hello>
        <Hello age={30}></Hello>
    </div>
  );
}

export default App;
```
- 상위 컴포넌트로 받은 값은 `props`로 전달받아 사용할 수 있다. 

```jsx
import {useState} from "react";

export default function Hello(props){
    const [name, setName] = useState('Mike')
    const [age, setAge] = useState(props.age)
    const changeName = () => {
        setName(name === 'Mike' ? 'Jane' : 'Mike')
    }
    const changeAge = () => {
        setAge(age+1);
    }
    return(
        <div>
            <h1>State</h1>
            <h2 id="name">{name}</h2>
            <h2>나이 {age}살</h2>
            <button onClick={changeName}>이름 바꾸기</button>
            <button onClick={changeAge}>나이 올리기</button>
        </div>
    )
}
```

## 잘못된 url 접근시 notFound page 만들기
- Routes 내부에서 가장 마지막에 `path="/*"`로 notFound 컴포넌트를 연결시켜준다.
- 지정된 path가 존재하면 지정된 path와 연결된 컴포넌트를 라우팅.
- 지정된 path가 없는 url이면 `path="/*"`(All)조건에 걸리게 되어 NotFound 페이지를 보여주게 된다.

```jsx
import Header from './component/Header';
import DayList from './component/DayList';
import Day from './component/Day';
import {BrowserRouter, Route, Routes, } from "react-router-dom";
import NotFound from "./component/NotFound";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header></Header>
            <Routes>
                <Route exact path="/" element={<DayList/>}></Route>
                <Route exact path="/day/:day" element={<Day/>}></Route>
                <Route path="/*" element={<NotFound/>}></Route>
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;

```

## toggle state
```jsx
// 내가 생각한 방법
export default function Word({word}){
    // 초기값을 빈값으로 설정.
    const [kor, setKor] = useState('');
    // if 문으로 처리.
    const showWord = () => {
        setKor(kor === '' ? word.kor : '');
    }
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td>{word.eng}</td>
            <td>{kor}</td>
            <td>
                <button onClick={showWord}>뜻보기</button>
            </td>
        </tr>
    )
}

// 강의에서 나온 방법
export default function Word({word}){
    // useState 초기값을 false로 지정.
    const [isShow, setIsShow] = useState(false);
    const toggleShow = () => {
        setIsShow(!isShow);
    }
    return(
        <tr>
            <td><input type="checkbox"/></td>
            <td>{word.eng}</td>
            {/* isShow가 true일때 해당 뜻이 보이도록 설정.*/}
            <td>{isShow && word.kor}</td>
            <td>
                <button onClick={toggleShow}>뜻보기</button>
                <button className="btn_del">삭제</button>
            </td>
        </tr>
    )
}
```
- vue에서는 Boolean 값에 따른 토글상태를 v-show, v-if를 통해서 처리했는데
- react에서는 상태 토글과 해당값을 `&&` 연산자로 묶어서 처리가 가능 !

## `json-server`
1. 설치
```
npm install -g json-server
```

2. json server load
```
json-server --watch ./src/db/data.json --port 3001
```

## useEffect
- 데이터 변화가 감지되었을 때 실행
- 의존성 배열?
```jsx
const [words, setWord] = useState([])

useEffect(() => {
        axios.get(`http://localhost:3001/words?day=${day}`)
            .then(res => setWord(res.data))
    }, [])
```

## Custom hooks
- 재사용되는 코드들을 컴포넌트로 만들어 사용할 수 있다.
- vue의 mixin의 기능과 유사.

```jsx
// userFetch.js
import {useEffect, useState} from "react";
import axios from "axios";

export default function useFetch(url){
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(res => setData(res.data))
    }, [url]);

    return data;
}

```



## useParams
- 현재 라우터로 보내진 파라미터 값을 반환한다.

```jsx
// (1) useParams import
import {useParams} from "react-router-dom";

export default function Day(){
    // (2) useParams의 반환값을 변수에 저장 후 사용.
    const {day} = useParams();
}
```

## query string으로 호출하는 데이터 선택도 가능했어..?




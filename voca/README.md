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
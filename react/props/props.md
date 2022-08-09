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